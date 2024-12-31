import React from "react";
import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
  return (
    <BasicLayout>
      <div className="w-full flex m-2 p-2 ">
        <Link to={"/todo/list"}><div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">
          LIST
        </div></Link>
        <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">
          ADD
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <Outlet/>
      </div>
    </BasicLayout>
  );
};

export default IndexPage;
