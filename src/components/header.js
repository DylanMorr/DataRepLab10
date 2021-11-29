import React, { Component } from 'react';

// import componet from react library and extend header class
class Header extends Component 
{
    // wrap return in the render method
    render() {
        return (
            // create a div with text in h1 tags
            <div>
                <h1>This is the header component</h1>
            </div>
        );
    }
}

// export header class
export default Header;