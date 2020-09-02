import React from 'react';
import "./VideoPlaceholder.css"

//Mapped component to displayed fetched data
export default function VideoPlaceholder({anime}) {
    return (
        <div key={anime.id} className="videoCard">
            <img src={anime.poster} alt={anime.show_name}/>
            <h2>{anime.show_name}</h2>
    <p>Episodes: {anime.epsiodes}</p>
        </div>
    )
}
