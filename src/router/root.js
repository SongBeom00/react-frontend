import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import todoRouter from "./todoRouter";

const Loading = <div>Loading...</div>;

const Main = lazy(() => import("../pages/MainPage")); //MainPage를 불러온다.
const About = lazy(() => import("../pages/AboutPage")); //AboutPage를 불러온다.

const TodoIndex = lazy(() => import("../pages/todo/IndexPage")); //TodoIndexPage를 불러온다.
const TodoList = lazy(() => import("../pages/todo/ListPage")); //TodoIndexPage를 불러온다.

const root = createBrowserRouter([
  //페이지가 많으면 배열이 많아진다.
  {
    path: "",
    exact: true,
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    exact: true,
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },

  {
    path: "todo",
    exact: true,
    element: (
      <Suspense fallback={Loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(),
  },
]);

export default root;
