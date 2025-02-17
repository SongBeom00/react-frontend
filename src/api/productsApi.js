import axios from "axios";
import jwtAxios from "../util/jwtUtil";


const host = `${process.env.REACT_APP_SPRING_API_URL}/api/product`;


export const postAdd = async (product) => {
    const headers = {headers : {'Content-Type': 'multipart/form-data'}}; //multipart/form-data

    const res = await jwtAxios.post(`${host}`, product, headers);

    return res.data;

}

export const getList = async (pageParam) => {
    
    const res = await jwtAxios.get(`${host}/list`, {params: {...pageParam}});

    return res.data;
}

export const getOne = async (pno) => {
    const res = await jwtAxios.get(`${host}/${pno}`);

    return res.data;
}

export const deleteOne = async (pno) => {
    const res = await jwtAxios.delete(`${host}/${pno}`);

    return res.data;
}

export const putOne  = async (pno, product) => {
    const headers = {headers : {'Content-Type': 'multipart/form-data'}}; //multipart/form-data

    const res = await jwtAxios.put(`${host}/${pno}`, product, headers);

    return res.data;
}