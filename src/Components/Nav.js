import React, {useState} from 'react';
import "./Nav.css"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from "@material-ui/core/TextField";
import request from "../request"

//SearchBar Component
function SearchBar(props){
    function enterKey (e){
        if (e.keyCode === 13)  {
            e.preventDefault();
            props.selectionStatus(`${request.fetchSearch}?show_name=${e.target.value}`) ;
         }
     }

    return(
        <form onKeyDown={enterKey}>
            <TextField 
            className="searchBar"
             focused={props.active} 
             id="filled-basic"
             label="Search" 
             color="secondary" 
             variant="filled"
             onChange={(e)=> e.target.value !== "" ? props.selectionStatus(`${request.fetchSearch}?show_name=${e.target.value}`): props.selectionStatus(request.fetchHome)} />
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
                <HomeIcon onClick={()=>selectionStatus(request.fetchHome)}/>
                <FavoriteIcon onClick={()=>selectionStatus(request.fetchFavorites)}/>
                <SearchIcon onClick={()=>toggle(!active)}/>
            </div>
            <SearchBar selectionStatus={selectionStatus} active={active}/>
        </React.Fragment>
         )
    
}
