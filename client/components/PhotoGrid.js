/**
 * Andrei Fidelman
 * 27/09/16
 * 19:33
 */
import React, { Component, PropTypes } from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo key={i} />)}
            </div>
        );
    };
}

PhotoGrid.propTypes = {

};

export default PhotoGrid;
