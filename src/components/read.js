import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

// import component and extend read class
class Read extends Component {
    constructor(){
        super();

        // bind ReloadData to this instance
        this.ReloadData = this.ReloadData.bind(this);
    }
    
    // component life cycle hook gets called when component gets mounted / active in view
    componentDidMount() {
        // use axios to retrieve data from server 
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                // update array movies with data
                this.setState({ mymovies: response.data })
            })
            // if theres a problem log an error to the console
            .catch((error) => {
                console.log(error)
            });
    }

    // create a method to reload data
    ReloadData(){
        // use axios to retrieve data from server 
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                // update array movies with data
                this.setState({ mymovies: response.data })
            })
            // if theres a problem log an error to the console
            .catch((error) => {
                console.log(error)
            });
    }

    // create an api for the movie details
    state = {
        mymovies: []
    };

    // wrap return in render method
    render() {
        return (
            // create a div for html code
            <div>
                <h1>This is my Read Component!</h1>
                {/* call the films function in the Movies class and populate the MovieItem with the api */}
                {/* pass ReloadData to movie child class */}
                <Movies films={this.state.mymovies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}

// export Read class
export default Read;