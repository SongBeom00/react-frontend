import React from 'react';
import './css/Loading.css';
import {FadeLoader} from "react-spinners";

const Loading = () => {
    return (
        <div className="loading-container">
            <p>로딩 중입니다... 잠시만 기다려 주세요 😊</p>
            <FadeLoader color="black" height={15} width={5} radius={2} margin={2} />
        </div>
    );
};


export default Loading;