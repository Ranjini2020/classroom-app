import axios from "axios";
export default {
    getUser: async () => {
        return axios({
            method: "GET",
            withCredentials: true,
            url: "/user",
        }).then(({data}) => {
            return data;
        });
    }
}