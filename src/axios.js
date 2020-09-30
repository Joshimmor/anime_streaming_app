import axios from "axios";


/* Base url to access Anime API */


const instance = axios.create({
    baseURL : " https://api.jikan.moe/v3/"
    /* BASE URL ENTER HERE */
});

export default instance