import React, { Component } from "react";

import "./About.css";

class About extends Component {
    render(){
        const url = 'https://www.dropbox.com/sh/co1ud3d44wx9do0/AABLeiAyVv5PfWl9eU66XzJXa?dl=0';

        return(
            <div className = "about">
                <h1 className = "h1">Osseous</h1>
                <body className = "summary">
                    Welcome to game project Osseous. Using unity3D along with blender, the game project
                    Osseous was created. It is a 3D action game revolved around a fantasy wold with a
                    great story. The button bellow redirects to the prijects current status.
                    Please feel free to try out the game. Just keep in mind it is still in development.
                </body>
                <a href={url}>
                    <button>Click Here</button>
                </a>
            </div>
        );
    }
}
export default About;