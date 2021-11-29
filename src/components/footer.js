import React, { Component } from 'react';

// import componet from react library and extend footer class
class Footer extends Component 
{
    // wrap return in the render method
    render() {
        return (
            // create a div with text in h1 tags
            <div>
                <h1>This is the footer component</h1>
            </div>
        );
    }
}

// export footer class
export default Footer;