import React from "react";
import "./Results.css";
import VideoPlaceholder from "./VideoPlaceholder";
import {Link} from "react-router-dom";



function Results ({animes}){
            
            if(animes === null){
                return(
                    <React.Fragment></React.Fragment>
                )
            }
        
            return(
                <div className="resultCard">
                        
                   {
                        animes.map((anime)=>(
                        <Link key={anime.mal_id} to={`/home/${anime.mal_id}`}
                        params={anime}>
                        <VideoPlaceholder
                        anime={anime}
                        
                                        />
                        </Link>
                                )         
                        )
                    }
                </div>
              
            );      
            
        
}

export default Results