import React, {lazy, Suspense} from 'react';
import Loading from "../components/common/Loading";


const Login = lazy(() => import("../pages/member/LoginPage"));


const memberRouter = () => {
    return [
        {
            path : "login",
            element : <Suspense fallback={Loading} ><Login/></Suspense>
        }
    ]
};

export default memberRouter;