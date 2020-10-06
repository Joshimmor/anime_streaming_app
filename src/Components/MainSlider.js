import React from 'react';
import { animated } from "react-spring";

import "./MainSlider.css";
import {Link} from "react-router-dom";
import {Button} from '@material-ui/core';
import EpisodeDisplay from "./EpisodeDisplay"
import axios from "../axios";
import request from "../request";
import searchResults from './searchResults';

export default function MainSlider({anime, navState}) {
  
    if(anime == null){
            return(
                <React.Fragment></React.Fragment>
            )
        }
    if(navState !== null){
      console.log(navState);
      async function fetchData(requestType){
        try {
              const response = await axios.get(requestType);
              const search = await response.data.results[0];
              return search
            }   
        catch (error) {
              console.log(error.message) //{config:{...}}
        
            }
      }
     const searchData = fetchData(request.fetchSearch + navState);
     console.log(searchData);
     return (
      <div className="container" >
                      <animated.div className="poster"  key={searchData.mal_id}>
                    <Link className="posterLink" key={searchData.mal_id} to={`/home/${searchData.mal_id}`}
                                params={searchData}>
                          <searchResults  props={searchData}/>
                    </Link>
                    
               </animated.div>
              
      </div>
    
    )
    }

console.log(anime)
  return (
    <div className="container" >
                    <animated.div className="poster"  key={anime.mal_id}>
                  <Link className="posterLink" key={anime.mal_id} to={`/home/${anime.mal_id}`}
                              params={anime}>
                        <img  src={anime.image_url} alt={anime.title}/>
                  </Link>
                  <Link  key={`btn${anime.mal_id}`} to={`/home/${anime.mal_id}`}params={anime}> 
                        <Button  className="watchButton" size="large" disableElevation>
                             Watch {anime.title}
                       </Button>
                  </Link>
             </animated.div>
             <animated.div className="epsiodeDisplay">
                <EpisodeDisplay
                className="tabPanel"/>
             </animated.div>
            
    </div>
  
  )
}
