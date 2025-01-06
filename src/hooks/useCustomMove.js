import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param, defaultValue) => {
    return param ? parseInt(param) : defaultValue;
}





const useCustomMove = () =>{ //이동기능이 많아 custom hook으로 분리
    const navigate = useNavigate();

    const [queryParam] = useSearchParams();

    const page = getNum(queryParam.get("page"),1);
    const size = getNum(queryParam.get("size"),10);

    //page=3&size=10 , page와 받은 size로 만들기
    const queryDefault = createSearchParams({page,size}).toString();

    const moveToList = (pageParam) => {
        let queryStr = ""
        if(pageParam){
            const pageNum = getNum(pageParam.get("page"),1);
            const sizeNum = getNum(pageParam.get("size"),10);
            queryStr = createSearchParams({page : pageNum,size : sizeNum}).toString();

        } 
        else {
            queryStr = queryDefault;
        }



        navigate({pathname : `../list`, search: queryStr});
    } 

    return {moveToList}; // 여러 개를 추가할 수 있어서 배열이나 객체로 return

}



export default useCustomMove;