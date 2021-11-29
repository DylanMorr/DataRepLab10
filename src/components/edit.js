import React, { Component } from 'react';
import axios from 'axios';

// import Component from react library and extend Create class
class Edit extends Component {
    // create a constructor
    constructor() {
        // to use forms need to use super to invoke react.component
        super();

        // bind all events to this instance of class
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        // when constructor called set to blank
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    Title: response.data.Title,
                    Year: response.data.Year,
                    Poster: response.data.Poster,
                    _id: response.data._id
                })
            })
            .catch();
    }

    handleSubmit(e) {
        // alert data to user
        alert("Movie: " + this.state.Title
            + " " + this.state.Year
            + " " + this.state.Poster);

        // create a newMovie object to send data to server
        const newMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster
        }

        axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
            .then((response) => { console.log(response) })
            .catch();

        // stop user from calling button multiple times
        e.preventDefault();

        this.setState({
            Title: '',
            Year: '',
            Poster: ''
        });
    }

    // create onChangeTitle method
    onChangeTitle(e) {
        // when value changes update state Title here
        this.setState({
            Title: e.target.value
        });
    }

    // create onChangeYear method
    onChangeYear(e) {
        // when value changes update state Year here
        this.setState({
            Year: e.target.value
        });
    }

    // create onChangePoster method
    onChangePoster(e) {
        // when value changes update state Poster here
        this.setState({
            Poster: e.target.value
        });
    }

    // wrap return in the render method
    render() {
        return (
            // create a main div with classname 'App'
            <div className='App'>
                <h1>This is my Edit Component!</h1>
                {/* Setup an onSubmit form */}
                <form onSubmit={this.handleSubmit}>

                    {/* Movie Title Div */}
                    <div className='form-group'>
                        <label>Edit Movie Title: </label>
                        {/* Text Input Control */}
                        <input type='text'
                            className='form-control'
                            /* Set value and set onChange event to call onChangeTitle method */
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    {/* Movie Year Div */}
                    <div className='form-group'>
                        <label>Edit Movie Year: </label>
                        {/* Text Input Control */}
                        <input type='text'
                            className='form-control'
                            /* Set value and set onChange event to call onChangeYear method */
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>

                    {/* Movie Poster Div */}
                    <div className='form-group'>
                        <label>Edit Movie Poster: </label>
                        {/* TextArea Control */}
                        <textarea type='text'
                            className='form-control'
                            /* Set value and set onChange event to call onChangePoster method */
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>

                    {/* Submit Button Div */}
                    <div className='form-group'>
                        {/* Submit Control */}
                        <br></br>
                        <input type='submit'
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>

                </form>
            </div>
        );
    }
}

// export Create class
export default Edit;