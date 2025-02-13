import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const BasicMenu = () => {

    // 로그인 정보를 가져오기 위해 useSelector를 사용한다.
    const loginState = useSelector(state => state.loginSlice);

    console.log(loginState)

  return (
    <nav id="navbar" className=" flex bg-blue-300">
      <div className="w-4/5 bg-gray-500">
        <ul className="flex p-4 text-white font-bold">
          <li className="pr-6 text-2xl">
            {" "}
            <Link to={"/"}>Main</Link>{" "}
          </li>
          <li className="pr-6 text-2xl">
            {" "}
            <Link to={"/about"}>About</Link>{" "}
          </li>

            {loginState.email ?
            <>
          <li className="pr-6 text-2xl">
            {" "}
            <Link to={"/todo/"}>Todo</Link>{" "}
          </li>
            <li className="pr-6 text-2xl">
                {" "}
                <Link to={"/products/"}>Products</Link>{" "}
            </li>
            </>
                :
            <></>
            }




        </ul>
      </div>
      <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
        <div className="text-white text-smm-1 rounded"><Link to={"/member/login"}>Login</Link></div>
      </div>
    </nav>
  );
};

export default BasicMenu;
