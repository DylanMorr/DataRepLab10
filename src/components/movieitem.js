import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

// import Component and extend MovieItem class with it
class MovieItem extends Component 
{
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
                    <Link to={"/edit/" +this.props.myfilm._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}

// export MovieItem class
export default MovieItem;