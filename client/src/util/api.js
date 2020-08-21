import axios from "axios";
export default {
    getUser: () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "/user",
        }).then(({data}) => {
            console.log(data);
            return data;
        });
    }
}