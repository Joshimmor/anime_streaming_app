import React, {useState, useEffect} from "react";
import "./Results.css";
import VideoPlaceholder from "./VideoPlaceholder"
import axios from "../axios";
import Loading from "./Loading";


function Results ({navState}){
    const [animes, setAnimes] = useState([])

  //Fetching  
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

        if(animes.length  < 1){
            return(
                <Loading/>
            )
        }
    return(
        <div className="resultCard">
        {animes.map((anime)=>(
            <VideoPlaceholder key={anime.id} anime={anime}/>
        ))}
        </div>
       
    )
}

export default Results