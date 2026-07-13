import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'5101d802e3b7482a805048de5f400e43'
    }
})
//this key will be included in every request we make to the API.