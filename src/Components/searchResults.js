import React from 'react';

function searchResults(props){
        return (
            <div>
                <img src={props.image_url} alt={props.title}/>
            </div>
        )
}

export default searchResults
