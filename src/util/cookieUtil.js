import {Cookies} from "react-cookie";


const cookie = new Cookies();



export const setCookie = (key, value, days = 1) => {
    const expires = new Date();
    expires.setUTCDate(expires.getUTCDate() + days); // 보관기한

    return cookie.set(key,value,{expires:expires, path : "/"});
}

export const getCookie = (key) => {
    return cookie.get(key);
}

export const removeCookie = (key, path = "/") => { // path = "/" : 기본값
    return cookie.remove(key, {path:"/"});
}

