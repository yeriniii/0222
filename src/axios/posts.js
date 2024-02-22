import axios from "axios";

const postsAxios = axios.create({
  baseURL: "http://localhost:3001/posts",
});
//???????
///setTimeout(()=>{
////},1500)
export default postsAxios;
