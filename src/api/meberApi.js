import axios from "axios";


const host = `${process.env.REACT_APP_SPRING_API_URL}/api/member`;



export const loginPost = async (loginParam) => {

    const headers = {headers : {'Content-Type': 'x-www-form-urlencoded'}};

    const form = new FormData();

    form.append("username", loginParam.email);
    form.append("password", loginParam.password);

    const res = await axios.post(`${host}/login`, form, headers);

    return res.data;

}