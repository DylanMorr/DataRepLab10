import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// import Component and extend MovieItem class with it
class MovieItem extends Component {
    // constructor to bind method
    constructor() {
        super();

        // bind to this instance
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    // create delete movie method 
    DeleteMovie(e) {
        // stop multiple deletes
        e.preventDefault();

        console.log("Delete: " + this.props.myfilm._id);

        // create a delete promise
        axios.delete("http://localhost:4000/api/movies/" + this.props.myfilm._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    // wrap return in render method
    render() {
        return (
            // create a div for html code
            <div>
                {/* Create a card and output all the movie details using the cards */}
                <Card>
                    <Card.Header>{this.props.myfilm.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myfilm.Poster} width="200" height="200"></img>

                            <footer>
                                {this.props.myfilm.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* Add an edit button using link to pass id up*/}
                    <Link to={"/edit/" + this.props.myfilm._id} className="btn btn-primary">Edit</Link>
                    {/* Add an delete button and trap click event to delete method*/}
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}

// export MovieItem class
export default MovieItem;