import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import Movie from './Movies';

const App = () => {

  let [movieName, setMovieName] = useState();
  let [movies, setMovies] = useState();
  let [moviesTwo, setMoviesTwo] = useState();
  let [moviesThree, setMoviesThree] = useState();

  let handleMovieName = (e) => {
    setMovieName(e.target.value)
  }

  let getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f191df19b1466cca5a86b534ed777132&language=en-US&query=${movieName}&page=1&include_adult=false`).then(function (response) {
      console.log(response)
      setMovies(response.data.results)
      console.log(movies)
    })
    document.getElementById('nav').style.display="inline-block";
  }

  let getMoviesTwo = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f191df19b1466cca5a86b534ed777132&language=en-US&query=${movieName}&page=2&include_adult=false`).then(function (response) {
      console.log(response)
      setMovies(response.data.results)
      console.log(movies)
    })
  }

  let getMoviesThree = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f191df19b1466cca5a86b534ed777132&language=en-US&query=${movieName}&page=3&include_adult=false`).then(function (response) {
      console.log(response)
      setMovies(response.data.results)
      console.log(movies)
    })
    
  }

  return (
    <>
      <input type="text" value={movieName} onChange={handleMovieName}></input>
      <button onClick={getMovies} >Search</button><br></br><br></br>
      {
        movies && movies.length == 0 ? (<h1>No Movies Found</h1>) : (<>
          <table style={{ 'width': '1340px' }} id="first">
            <tr>
              {
                movies && <>{movies.map(function (value) {
                  return (
              // <>
              // <td className="container" style={{'width' : '250px' , 'display' : 'inline-block' , 'height' : '320px', 'margin' : '25px' , 'marginLeft' : '45px' }}>
              //   <div class='img-container'>
              //     <img src={'https://image.tmdb.org/t/p/original/'+ value.poster_path} alt="No Image Avaialable" width="250px" height="240px"></img>
              //   </div>
              //   <h3>{value.title}</h3>
              //   <h3>{value.vote_average}</h3>
              // </td>
              // </>
              <><Movie value={value}></Movie>
              </>
                  )
                })}</>
              }
              
            </tr>
          </table><nav aria-label="Page navigation example" id="nav">
  <ul class="pagination">
    <li class="page-item" ariaCurrent><button onClick={getMovies}>1</button></li>
    <li class="page-item"><button onClick={getMoviesTwo}>2</button></li>
    <li class="page-item"><button onClick={getMoviesThree}>3</button></li>
  </ul>
</nav></>)}

          {/* <table style={{ 'width': '1340px' , "display" : "none"}} id="second">
            <tr>
              {
                moviesTwo && <>{moviesTwo.map(function (value) {
                  return (
                    <Movie value={value}></Movie>
                  )
                })}</>
              }
              
            </tr>
          </table>
          
          <table style={{ 'width': '1340px' , "display" : "none"}} id="third">
            <tr>
              {
                moviesThree && <>{moviesThree.map(function (value) {
                  return (
                    <Movie value={value}></Movie>
                  )
                })}</>
              }
              
            </tr>
          </table> */}
         
          
    </>
  );
}

export default App;