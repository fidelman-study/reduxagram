/**
 * Andrei Fidelman
 * 27/09/16
 * 19:33
 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {this.props.children}
            </div>
        );
    };
}

Main.propTypes = {

};

export default Main;
