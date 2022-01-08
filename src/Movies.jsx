import React from 'react';

const Movie = (props) => {
    return ( 
        <>
            <td className="container" style={{'width' : '250px' , 'display' : 'inline-block' , 'height' : '320px', 'margin' : '25px' , 'marginLeft' : '45px' }}>
                <div class='img-container'>
                  <img src={'https://image.tmdb.org/t/p/original/'+ props.value.poster_path} alt="No Image Avaialable" width="250px" height="240px"></img>
                </div>
                <label style={{"fontSize" : "20px"}}>{props.value.title}</label><br></br>
                <label style={{"fontSize" : "20px"}}>{props.value.vote_average}</label>
                <label style={{"marginLeft" : "180px" , "fontSize" : "17px"}}>{props.value.original_language}</label>
            </td>
        </>
     );
}
 
export default Movie;