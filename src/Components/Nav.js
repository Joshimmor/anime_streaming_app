import React, {useState} from 'react';
import "./Nav.css"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from "@material-ui/core/TextField";
import request from "../request";
import {Link} from "react-router-dom";


//SearchBar Component
function SearchBar(props){
    //Cap Corrector
    function capsOn(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    // stopping Axios from constant calls
    
    
    function keyDown (e){
        if (e.keyCode === 13)  {
            e.preventDefault();
            }   
        }

    return(
        <form onKeyDown={keyDown} >
            <TextField 
            className="searchBar"
             focused={props.active} 
             id="filled-basic"
             label="Search" 
             color="secondary" 
             variant="filled"
             onChange={(e)=> e.target.value !== "" ? props.selectionStatus(capsOn(e.target.value)) : props.selectionStatus(request.fetchHome)} 
             />
             
        </form>
    )
}
//saving the api request to the state saved in  APP.js
    export default function Nav({selectionStatus}){  
// state for toggling searchBar when the icon is clicked
    const [active,toggle] = useState(false)

    // navigation Bar which tells the api which data to grab
    return (
        <React.Fragment>
            <div className="navigationBar">
                <Link to="/">
                    <HomeIcon />
                </Link>
                <FavoriteIcon onClick={()=>selectionStatus(request.fetchFavorites)}/>
                <SearchIcon onClick={()=>toggle(!active)}/>
            </div>
            <SearchBar selectionStatus={selectionStatus} active={active}/>

        </React.Fragment>
         )
    
}
