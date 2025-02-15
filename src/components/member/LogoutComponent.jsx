import React from "react";
import useCustomLogin from "../../hooks/useCustomLogin";

const LogoutComponent = () => {

    const { doLogout, moveToPath } = useCustomLogin();



    const handleClickLogout = () => {

        doLogout();
        alert("로그아웃 되었습니다.");
        moveToPath("/")

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-red-300">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">
                <h2 className="text-3xl font-bold text-red-600 mb-6">
                    Are you sure you want to log out?
                </h2>

                <button
                    className="w-full p-4 text-lg bg-red-500 text-white font-bold rounded-xl shadow-md hover:bg-red-600 transition"
                    onClick={handleClickLogout}
                >
                    Logout
                </button>

            </div>
        </div>
    );
};

export default LogoutComponent;