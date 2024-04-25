import axios from "axios";
export   const  axiosinstance= axios.create({
    baseURL:`https://api.noroff.dev/api/v1`
})
export default axiosinstance;

