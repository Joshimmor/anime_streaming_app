import React from 'react';
import { animated } from "react-spring";

import "./MainSlider.css";
import {Link} from "react-router-dom";
import {Button} from '@material-ui/core';
import EpisodeDisplay from "./EpisodeDisplay"

export default function MainSlider({anime,setIndex,index,navState}) {
  //creating array of objects to animate

/*
 const animeList = {

      animes: [anime]
 }
//useTranssition hook animations
 const posterTransition = useTransition(animeList.animes , null,{
              from:{
                opacity:0,
                transform: "translateX(-500px)"
              },
              enter:{
                opacity:1,
                transform: "translateX(0)"
              },
              leave:{
                opacity:0,
                transform: "translateX(500px)"
              }
      })
//foward button function
    function forward(index,setIndex) {
      if(index === 4){
        setIndex(0)
      }else{
        setIndex(index + 1)
      }
    };

    //backwards button function
    function backwards(index,setIndex) {
      if(index === 0){
        setIndex(4)
      }else{
        setIndex(index - 1)
      }
    };
    
*/
    if(anime == null){
            return(
                <React.Fragment></React.Fragment>
            )
        }else if(navState !== "data"){
          return(
            <React.Fragment></React.Fragment>
               )
     }
  return (
    <div className="container" >
                    <animated.div className="poster"  key={anime.id}>
                  <Link className="posterLink" key={anime.id} to={`/home/${anime.id}`}
                              params={anime}>
                        <img  src={anime.poster} alt={anime.show_name}/>
                  </Link>
                  <Link  key={`btn${anime.id}`} to={`/home/${anime.id}`}params={anime}> 
                        <Button  className="watchButton" size="large" disableElevation>
                             Watch {anime.show_name}
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
