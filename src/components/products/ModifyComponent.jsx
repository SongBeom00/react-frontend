import React, {useEffect, useRef, useState} from 'react';
import {deleteOne, getOne, putOne} from "../../api/productsApi";
import FetchingModal from "../common/FetchingModal";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";


const initState = {
    pno: 0,
    pname: '',
    price: 0,
    pdesc : '',
    delFlag : false,
    uploadedFileNames : []
}



const ModifyComponent = ({pno}) => {

    const [product, setProduct] = useState(initState)

    const [fetching, setFetching] = useState(false);

    const { moveToList , moveToRead } = useCustomMove();

    const [result, setResult] = useState()


    const uploadRef = useRef();

    useEffect(() => {

        setFetching(true);

        getOne(pno).then(data => {
            setProduct(data);
            setFetching(false);
        });

    }, [pno]);

    const handleChangeProduct = (e) => {
        product[e.target.name] = e.target.value;
        setProduct({...product});
    }

    const deleteOldImages = (imageName) => { // react 에서만 이미지를 삭제한다.
        product.uploadedFileNames = product.uploadedFileNames.filter(fileName => fileName !== imageName);
        setProduct({...product});
    }


    const handleClickModify = () => { // 수정 버튼을 누르면 서버랑 통신을 해서 수정한다.

        const files = uploadRef.current.files;

        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }

        formData.append("pname", product.pname);
        formData.append("pdesc", product.pdesc);
        formData.append("price", product.price);
        formData.append("delFlag", product.delFlag);

        for (let i = 0; i < product.uploadedFileNames.length; i++) {

            formData.append("uploadedFileNames", product.uploadedFileNames[i]);


        }

        setFetching(true);

        putOne(pno, formData).then(data => {

            setResult('수정되었습니다.');
            setFetching(false)
        });

    }



    const handleClickDelete = () => {

        setFetching(true);

        deleteOne(pno).then(data => {

            setResult('삭제되었습니다.');
            setFetching(false);

        });
    }

    const closeModal = () => {

        switch (result) {
            case '수정되었습니다.': moveToRead(pno); break
            case '삭제되었습니다.': moveToList({page:1}); break
            default:break;
        }
        setResult(null);

    }

    return (
        <div className = "border-2 border-sky-200 mt-10 m-2 p-4">
            {fetching? <FetchingModal/> :<></>}

            {result && <ResultModal title={result} content={`상품 ${pno} 번이 처리되었습니다.`} callbackFn={closeModal}/>}

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Product Name</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="pname"
                           type={'text'}
                           value={product.pname}
                           onChange={handleChangeProduct}
                    >
                    </input>

                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Desc</div>
                    <textarea
                        className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md resize-y"
                        name="pdesc"
                        rows="4"
                        onChange={handleChangeProduct}
                        value={product.pdesc}>
            {product.pdesc}
          </textarea>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Price</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="price"
                           type={'number'}
                           value={product.price}
                           onChange={handleChangeProduct}
                    >
                    </input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">DELETE</div>
                    <select
                        name="delFlag" value={product.delFlag}
                        onChange={handleChangeProduct}
                        className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md">
                        <option value={false}>사용</option>
                        <option value={true}>삭제</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Files</div>
                    <input ref={uploadRef}
                           className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           type={'file'} multiple={true}
                    >
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                        Images
                    </div>
                    <div className="w-4/5 justify-center flex flex-wrap items-start">

                        {product.uploadedFileNames.map( (imgFile, i) =>
                            <div
                                className="flex justify-center flex-col w-1/3"
                                key = {i}>
                                <button className="bg-blue-500 text-3xl text-white"
                                        onClick={() => deleteOldImages(imgFile)}
                                >DELETE</button>
                                <img
                                    alt ="img"
                                    src={`${process.env.REACT_APP_SPRING_API_URL}/api/product/view/s_${imgFile}`}/>

                            </div>
                        )}


                    </div>
                </div>
            </div>

            <div className="flex justify-end p-4">
                <button type="button"
                        className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                        onClick={handleClickDelete}
                >
                    삭제
                </button>

                <button type="button"
                        className="inline-block rounded p-4 m-2 text-xl w-32  text-white bg-orange-500"
                        onClick={handleClickModify}
                >
                    수정
                </button>

                <button type="button"
                        className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                        onClick={moveToList}
                >
                    List
                </button>

            </div>

        </div>

    );
};

export default ModifyComponent;