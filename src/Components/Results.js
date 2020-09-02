import React, {useState, useEffect} from "react";
import "./Results.css";
import VideoPlaceholder from "./VideoPlaceholder"
import axios from "../axios";
import Loading from "./Loading";


function Results ({navState}){
    //Anime Titles State to be displayed 
    const [animes, setAnimes] = useState([])

  //Fetching Anime Titles 
 useEffect(() => {
        async function fetchData(){
        //
          const response = await axios.get(navState);
           console.log(response);
           setAnimes(response.data)
           return response;
        }
    fetchData();    
    }, [navState])

    //Displaying Fetched Items 
    return(
        <div className="resultCard">
        {animes.map((anime)=>(
            <VideoPlaceholder key={anime.id} anime={anime}/>
        ))}
        </div>
       
    )
}

export default Results