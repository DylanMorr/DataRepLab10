import React, {Component} from 'react';
import MovieItem from './movieitem';

// import component and extent the Movies class
class Movies extends Component
{
    // wrap return in the render method
    render(){
        // create a function and map the movie items to films 
        // setup a key using film.imdbID
        return this.props.films.map((film)=>{
            return <MovieItem myfilm={film} key={film.imdbID}></MovieItem>
        });
    }
}

// export Movies class
export default Movies;