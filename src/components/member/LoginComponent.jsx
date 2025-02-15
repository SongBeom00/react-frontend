import React, { useState } from "react";
import {Link, replace, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginPostAsync} from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
    email: "",
    password: "",
};

const LoginComponent = () => {
    const [loginParam, setLoginParam] = useState({ ...initState });

    const { doLogin, moveToPath } = useCustomLogin();

    const handleChange = (e) => {
        setLoginParam({ ...loginParam, [e.target.name]: e.target.value });
    };


    const handleClickLogin = (e) => {
        // dispatch(login(loginParam)); 1차 테스트

        doLogin(loginParam).then((data) => { // 최종 테스트
            if(data.error){
                alert("이메일과 패스워드를 확인해 주세요")
            }
            else{
                alert("로그인 성공")
                moveToPath("/");
            }
        })



        // dispatch(loginPostAsync(loginParam)) 2차 테스트
        //     .unwrap()
        //     .then((data) => {
        //
        //         if(data.error){
        //             alert("이메일과 패스워드를 확인해 주세요")
        //         }
        //         else{
        //             alert("로그인 성공")
        //             moveToPath("/");
        //         }
        //
        //     })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
                <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
                    로그인
                </h2>

                {/* Email Input */}
                <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        className="w-full p-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        name="email"
                        type="text"
                        value={loginParam.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        className="w-full p-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        name="password"
                        type="password"
                        value={loginParam.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </div>

                {/* Login Button */}
                <button  onClick={handleClickLogin} className="w-full p-4 text-lg bg-blue-500 text-white font-bold rounded-xl shadow-md hover:bg-blue-600 transition">
                    Login
                </button>

                {/* Signup & Forgot Password */}
                <div className="mt-6 text-center text-sm">
                    <Link to={"/member/login"} className="text-blue-500 hover:underline">
                        Forgot password?
                    </Link>
                    <span className="mx-2 text-gray-400">|</span>
                    <Link to={"/member/login"} className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;