import React from 'react';
import "./VideoPlaceholder.css";
import {animated,useSpring} from "react-spring";



//Mapped component to displayed fetched data
export default function VideoPlaceholder({anime,navState}) {
        //animation
        let delayNumber = Math.random(0,.2)*1000;
        const Transitions = useSpring(
                   { 
                       from:{    
                        opacity:0,
                        transform : navState !== 'data' ? "transformX(-500px)":"scale(0.7)"
                    },
                    opacity:1,
                    transform :  navState !== 'data' ? "transformX(0px)":"scale(1)",
                    delay: delayNumber
                    }
        );
        
                    
        
            return (
                  
                        <animated.div style={Transitions} 
                        key={anime.id} 
                        className="videoCard">
                            <img src={anime.image_url} alt={anime.title}/>
                            
                        </animated.div>
                
                )
        }
