import React from 'react';

const Movie = (props) => {
    return ( 
        <>
            <td className="container" style={{'width' : '250px' , 'display' : 'inline-block' , 'height' : '320px', 'margin' : '25px' , 'marginLeft' : '45px' }}>
                <div class='img-container'>
                  <img src={'https://image.tmdb.org/t/p/original/'+ props.value.poster_path} alt="No Image Avaialable" width="250px" height="240px"></img>
                </div>
                <h3>{props.value.title}</h3>
                <h3>{props.value.vote_average}</h3>
            </td>
        </>
     );
}
 
export default Movie;