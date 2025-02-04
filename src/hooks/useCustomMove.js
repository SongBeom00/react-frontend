import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";

const getNum = (param, defaultValue) => {
    return param ? parseInt(param) : defaultValue;
}


const useCustomMove = () => { //이동기능이 많아 custom hook으로 분리
    const navigate = useNavigate();

    const [refresh, setRefresh] = useState(false);

    const [queryParam] = useSearchParams();


    const page = getNum(queryParam.get("page"), 1);
    const size = getNum(queryParam.get("size"), 10);

    //page=3&size=10 , page 와 받은 size 로 만들기
    const queryDefault = createSearchParams({page, size}).toString();

    const moveToList = (pageParam) => {
        console.log(pageParam);
        let queryStr = ""
        if (pageParam) {
            const pageNum = getNum(pageParam.page, 1);
            const sizeNum = getNum(pageParam.size, 10);
            queryStr = createSearchParams({page: pageNum, size: sizeNum}).toString();

        } else {
            queryStr = queryDefault;
        }

        setRefresh(!refresh);

        navigate({pathname: `../list`, search: queryStr});
    }


    const moveToModify = (num) => {
        navigate({pathname: `../modify/${num}`, search: queryDefault});
    }

    const moveToRead = (num) => {
        navigate({pathname: `../read/${num}`, search: queryDefault});
    }

    return {moveToList, moveToModify, moveToRead, page, size, refresh}; // 여러 개를 추가할 수 있어서 배열이나 객체로 return

}


export default useCustomMove;