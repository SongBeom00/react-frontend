import React, {useEffect, useState} from 'react';
import useCustomMove from "../../hooks/useCustomMove";
import {getList, host} from "../../api/productsApi";
import fetchingModal from "../common/FetchingModal";
import FetchingModal from "../common/FetchingModal";
import PageComponent from "../common/PageComponent";


const initState = {
    dtoList: [],
    pageRequestDto: null,
    pageNumList: [],
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0,
};



const ListComponent = () => {

    const {moveToList, moveToRead, page, size, refresh} = useCustomMove();

    const [serverData, setServerData] = useState(initState);

    const [fetching, setFetching] = useState(false);

    useEffect(() => {

        setFetching(true); // 데이터를 가져오는 중이라는 것을 알려줍니다.

        getList({page, size}).then(data => {
            // console.log(data);
            setFetching(false); // 데이터를 가져왔다는 것을 알려줍니다.
            setServerData(data);
        });

    }, [page,size,refresh]);

    console.log(serverData);

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
            {fetching && <FetchingModal/>}

            <div className="flex flex-wrap mx-auto p-6">
                {serverData.dtoList.map(product =>
                    <div
                        key= {product.pno}
                        className="w-1/2 p-1 rounded shadow-md border-2"
                        onClick={() => moveToRead(product.pno)}
                    >
                        <div className="flex flex-col  h-full">
                            <div className="font-extrabold text-2xl p-2 w-full ">
                                {product.pno}
                            </div>
                            <div className="text-1xl m-1 p-2 w-full flex flex-col">

                                <div className="w-full overflow-hidden ">
                                    <img alt="product"
                                         className="m-auto rounded-md w-60"
                                         src={`${process.env.REACT_APP_SPRING_API_URL}/api/product/view/s_${product.uploadedFileNames[0]}`}
                                    />
                                </div>

                                <div className="bottom-0 font-extrabold bg-white">
                                    <div className="text-center p-1">
                                        이름: {product.pname}
                                    </div>
                                    <div className="text-center p-1">
                                        가격: {product.price}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>

            <PageComponent serverData={serverData} movePage={moveToList}/>

        </div>
    );
};

export default ListComponent;