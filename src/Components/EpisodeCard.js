import React,{useState, useEffect} from 'react';
import "./EpisodeCard.css"
import {useSpring, animated} from "react-spring";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";


export default function EpisodeCard(props) {
   const [pageData, setPageData] = useState()
//ANIMATION OF TITLES
    const left = useSpring({
            from:{
                opacity:0,
                transform: "translateX(-300px)"
            },
            opacity:1,
            transform: "translateX(0)"
           
    });
    const bottom = useSpring({
        from:{
            opacity:0,
            transform: "translateY(500px)"
        },
        opacity:1,
        transform: "translateY(0)"
    });
    const fade = useSpring({
        from:{
            opacity:0
        },
        opacity:1
    });
    
    
    useEffect(()=> {
        const pL = props.anime.filter((n) => n.id == props.match.params.animeid)[0]
        setPageData(pL)
        },[props,setPageData])
        console.log(pageData)
    if(pageData == null){ return(<React.Fragment></React.Fragment>)}
    return (
        <div className="episodeCard">
            <animated.span  style={fade}>
                <Link  className="arrowHead" to={"/"} >
                <ArrowBackIcon  fontSize="large"/>
                </Link>
            </animated.span>
            <animated.img style={left} className="episodeImage" src={pageData.poster} alt="anime"/>
            <animated.div className="tagLine" style={bottom}>
                 <h2>{pageData.show_name}</h2>
                <p>{`Episodes ${pageData.epsiodes}`}</p>
             </animated.div> 
            {/*Mapp through the Videos slice 0,15  */}
        </div>
        )
   
    
}
