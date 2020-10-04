import axios from "axios";


/* Base url to access Anime API */


const instance = axios.create({
    //baseURL : " https://api.jikan.moe/v3/"
   // baseURL : "https://192.168.1.197:3001/"
    /* BASE URL ENTER HERE */
});

export default instance