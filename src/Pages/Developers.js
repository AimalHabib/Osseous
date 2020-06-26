import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./Developers.css";
 
class Developers extends Component {
    
    render(){
        const url = 'https://opengameart.org/art-search-advanced?keys=&title=&field_art_tags_tid_op=or&field_art_tags_tid=&name=GiggaWatt&field_art_type_tid%5B%5D=9&field_art_type_tid%5B%5D=10&field_art_type_tid%5B%5D=7273&field_art_type_tid%5B%5D=14&field_art_type_tid%5B%5D=12&field_art_type_tid%5B%5D=13&field_art_type_tid%5B%5D=11&field_art_licenses_tid%5B%5D=17981&field_art_licenses_tid%5B%5D=2&field_art_licenses_tid%5B%5D=17982&field_art_licenses_tid%5B%5D=3&field_art_licenses_tid%5B%5D=6&field_art_licenses_tid%5B%5D=5&field_art_licenses_tid%5B%5D=10310&field_art_licenses_tid%5B%5D=4&field_art_licenses_tid%5B%5D=8&field_art_licenses_tid%5B%5D=7&sort_by=score&sort_order=DESC&items_per_page=24&Collection=';

        return(
            <div className = "developers">
                <h1 className = "h1">For Developer page</h1>
                <body className = "summary">
                    Welcome fellow developers, throughout the years a lot of 3D model was created in order to
                    develope this project. The link below redirects to a page that allows access to the models.
                    Feel freee to use the models however you see fit. Enjoy creating great applications
                </body>
                <a href={url}>
                    <button>Click Here</button>
                </a>
            </div>
        );
    }
}
 
export default Developers;