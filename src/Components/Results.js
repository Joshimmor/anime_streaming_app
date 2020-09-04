import React from "react";
import "./Results.css";
import VideoPlaceholder from "./VideoPlaceholder";
import {Link} from "react-router-dom";



function Results ({animes}){
           
            
            
        
            return(
                <div className="resultCard">
                   {
                        animes.slice(0,12).map((anime, navState)=>(
                        <Link to={`/home/${anime.id}`}>
                        <VideoPlaceholder
                        key={anime.id}
                        anime={anime}
                        navState={navState}
                                        />
                        </Link>
                                )         
                        )
                    }
                </div>
              
            );      
            
        
}

export default Results