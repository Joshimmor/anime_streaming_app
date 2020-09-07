import React,{useState, useEffect} from 'react';
import {useTransition, animated} from "react-spring";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./MainSlider.css";
import {Link} from "react-router-dom";

export default function MainSlider({anime,setIndex,index,navState}) {
  //creating array of objects to animate
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
      });
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
      
             {posterTransition.map(({item, key, props}) => {
                  return (
                    <animated.div className="poster" style={props} key={key}>
                  <Link key={anime.id} to={`/home/${anime.id}`}
                              params={anime}>
                        <img  src={anime.poster} alt={anime.show_name}/>
                  </Link>
                        <h1>{anime.show_name}</h1>
             </animated.div>
                  )
                 }
             )};
            <div className="buttons">
                <ArrowBackIosIcon className="back" onClick={()=> backwards(index,setIndex)}/> 
                <ArrowForwardIosIcon className="forward" onClick={()=>forward(index,setIndex)}/>
            </div>
    </div>
  
  )
}
