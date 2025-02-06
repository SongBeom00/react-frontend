import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import todoRouter from "./todoRouter";
import productsRouter from "./productsRouter";
import Loading from "../components/common/Loading";


const Main = lazy(() => import("../pages/MainPage")); //MainPage를 불러온다.
const About = lazy(() => import("../pages/AboutPage")); //AboutPage를 불러온다.

const TodoIndex = lazy(() => import("../pages/todo/IndexPage")); //TodoIndexPage 를 불러온다.

const ProductsIndex = lazy(() => import("../pages/products/IndexPage")); //ProductsIndexPage 를 불러온다.


const root = createBrowserRouter([
    //페이지가 많으면 배열이 많아진다.
    {
        path: "",
        exact: true,
        element: (
            <Suspense fallback={<Loading/>}>
                <Main/>
            </Suspense>
        ),
    },
    {
        path: "about",
        exact: true,
        element: (
            <Suspense fallback={<Loading/>}>
                <About/>
            </Suspense>
        ),
    },

    {
        path: "todo",
        exact: true,
        element: (
            <Suspense fallback={<Loading/>}>
                <TodoIndex/>
            </Suspense>
        ),
        children: todoRouter(), //Outlet 을 사용하기 위해서는 children 을 사용해야 한다.
    },
    {
        path: "products",
        exact: true,
        element: (
            <Suspense fallback={<Loading/>}>
                <ProductsIndex/>
            </Suspense>
        ),
        children: productsRouter(),
    }
]);

export default root;
