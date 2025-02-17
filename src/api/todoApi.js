import axios from "axios";
import jwtAxios from "../util/jwtUtil";


const prefix = `${process.env.REACT_APP_SPRING_API_URL}/api/todo`;

export const getOne = async (tno) => {
  const res = await jwtAxios.get(`${prefix}/${tno}`);

  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await jwtAxios.get(`${prefix}/list`, { params: { page, size } });

  return res.data; // async/await -> 반환 타입은 promise이다.
};

export const postAdd = async (todoObj) => {
  //JSON.stringify(todoObj) -> JSON 문자열로 변환 했지만 axios 는 자동으로 변환해준다.
  const res = await jwtAxios.post(`${prefix}`, todoObj);

  return res.data;
}

export const putOne = async (todo) => {
  const res = await jwtAxios.put(`${prefix}/${todo.tno}`,todo);
  return res.data;
}


export const deleteOne = async (tno) => {
  const res = await axios.delete(`${prefix}/${tno}`);

  return res.data;
}