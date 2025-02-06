import React from 'react';
import {useParams} from "react-router-dom";
import ReadComponent from "../../components/products/ReadComponent";

const ReadPage = () => {

    const {pno} = useParams();


    return (
        <div className={"p-4 w-full bg-white"}>
            <div className={"text-3xl font-extra bold"}
            >
                상품 상세 페이지 {pno}번
            </div>

            <ReadComponent pno={pno}/>

        </div>
    );
};

export default ReadPage;