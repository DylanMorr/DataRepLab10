import React, { Component } from 'react';

// import componet from react library and extend Content class
class Content extends Component 
{
    // wrap return in the render method
    render() {
        return (
            // create a div with text in h1 tags
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// export Content class
export default Content;