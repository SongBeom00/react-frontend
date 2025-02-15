import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginPostAsync, logout} from "../slices/loginSlice";


const useCustomLogin = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginState = useSelector(state => state.loginSlice);


    const isLogin = loginState.email ? true : false;

    const doLogin = async (loginParam) => { // 로그인 처리
        const aciton = await dispatch(loginPostAsync(loginParam));

        return aciton.payload;
    }

    const doLogout = () => { // 로그아웃 처리
        dispatch(logout());
    }

    const moveToPath = (path) => { // 이동 처리
        navigate({pathname: path},{replace:true});
    }

    const moveToLogin = () => { // 로그인 페이지 이동
        navigate({pathname: "/member/login"},{replace:true});
    }

    const moveToLoginReturn = () => {
        return <Navigate replace to={"/member/login"}></Navigate>
    }

    return {isLogin, doLogin, doLogout, moveToPath, moveToLogin, moveToLoginReturn};


}

export default useCustomLogin;