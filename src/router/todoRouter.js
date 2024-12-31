import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>;

const TodoList = lazy(() => import("../pages/todo/ListPage")); //TodoIndexPage를 불러온다.
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));

const todoRouter = () => {
    return [
            {
                path : "list",
                element : <Suspense fallback={Loading}><TodoList /></Suspense>
            },
            {
                path: '',
                element : <Navigate replace = {true} to={"list"}/>
            }
            ,
            {
                path:"read",


            }
    ]

}

export default todoRouter;