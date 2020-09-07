import React,{useEffect} from "react";
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
                        animes.slice(0,12).map((anime)=>(
                        <Link key={anime.id} to={`/home/${anime.id}`}
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