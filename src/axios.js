import axios from "axios";


/* Base url to access Anime API */


const instance = axios.create({
    baseURL : "http://localhost:3001/"
    /* BASE URL ENTER HERE */
});

export default instance