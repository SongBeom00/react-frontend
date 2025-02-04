import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);

  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefix}/list`, { params: { page, size } });

  return res.data; // async/await -> 반환 타입은 promise이다.
};

export const postAdd = async (todoObj) => {

  //JSON.stringify(todoObj) -> JSON 문자열로 변환 했지만 axios 는 자동으로 변환해준다.
  const res = await axios.post(`${prefix}`, todoObj);

  return res.data;
}