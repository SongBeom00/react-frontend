import React from 'react';
import BasicMenu from "../../components/menus/BasicMenu";
import LoginComponent from "../../components/member/LoginComponent";

const LoginPage = () => {
    return (
        <div className='flex top-0 left-0 z-[1055] flex flex-col h-full w-full'>
            <BasicMenu/>
            <div className="flex flex-wrap w-full h-full justify-center items-center border-2">
                <LoginComponent/>
             </div>
        </div>
    )
};

export default LoginPage;