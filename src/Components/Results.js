import React, {useState, useEffect} from "react";
import "./Results.css";
import VideoPlaceholder from "./VideoPlaceholder"
import axios from "../axios";
import Loading from "./Loading";
import request from "../request"



function Results ({navState}){
            //Anime Titles State to be displayed 
            const [animes, setAnimes] = useState([])
            //setting Regex
            const regex = new RegExp("^"+navState, "g");
        //Fetching Anime Titles 
        useEffect(() => {
                async function fetchData(){
                const response = await axios.get(request.fetchHome);
                setAnimes(response.data)
                if(navState!=="data"){
                    let filteredAnimes = animes.filter((anime) =>{
                        return anime.show_name.match(regex)
                    })
                    setAnimes(filteredAnimes)
                }else{
                    setAnimes(response.data)
                }
                }
            fetchData();    
            }, [navState,regex,animes])
        //State before render
            console.log(navState)
            
            
            
        
            return(
                <div className="resultCard">
                   {
                        animes.slice(0,12).map((anime, navState)=>(
                        <VideoPlaceholder
                        key={anime.id}
                        anime={anime}
                        navState={navState}
                                        />
                                )         
                        )
                    }
                </div>
              
            );      
            
        
}

export default Results