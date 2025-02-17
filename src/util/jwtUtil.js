import axios from "axios";
import {getCookie, setCookie} from "./cookieUtil";


const jwtAxios = axios.create();

const refreshJWT = async (accessToken, refreshToken) => {

    const headers = {headers : {'Authorization' : `Bearer ${accessToken}`}};

    const res = await axios.get(`${process.env.REACT_APP_SPRING_API_URL}/api/member/refresh?refreshToken=${refreshToken}`, headers);

    console.log(res.data)

    return res.data;


}

// 요청 전에
const beforeReq = (config) => {

    console.log("beforeReq.......");

    const memberInfo = getCookie("member");

    if(!memberInfo){
        return Promise.reject({
            response : {
                data : {
                    message : "로그인이 필요한 서비스입니다."
                }
            }
        })
    }

    const {accessToken} = memberInfo;

    console.log("accessToken : ",accessToken);

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
}

// 요청 실패시
const requestFail = (error) => {
    console.log("requestFail.......");

    return Promise.reject(error);
}

// 응답 성공시
const beforeRes = async (response) => {
    console.log("beforeRes.......");

    const data = response.data;

    if(data && data.error === 'ERROR_ACCESS_TOKEN'){

        console.log("refresh token....====================================");

        const memberCookieValue = getCookie("member");

        const result = await refreshJWT(memberCookieValue.accessToken, memberCookieValue.refreshToken);

        // 새로운 accessToken, refreshToken 을 받아온다.

        memberCookieValue.accessToken = result.accessToken;
        memberCookieValue.refreshToken = result.refreshToken;

        setCookie("member", JSON.stringify(memberCookieValue), 1);

        const originalRequest = response.config;

        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

        return await axios(originalRequest);


    }

    return response;
}

// 응답 실패시
const responseFail = (error) => {
    console.log("requestFail.......");

    return Promise.reject(error);
}

jwtAxios.interceptors.request.use(beforeReq,requestFail) // 요청 전에 실행
jwtAxios.interceptors.response.use(beforeRes,responseFail) // 응답 전에 실행



export default jwtAxios;