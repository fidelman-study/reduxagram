/**
 * Andrei Fidelman
 * 27/09/16
 * 19:33
 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Raven from 'raven-js';
import { sentry_url, logException } from '../data/config';


class Main extends Component {

    handleError() {
        Raven.config(sentry_url, {
            tags: {
                git_commit: 'as09d8f09'
            }
        }).install();

        logException(new Error('Incomplete Data!'), {
            email: 'wesbos@gmail.com'
        });

        Raven.showReportDialog();
    }

    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                <button onClick={this.handleError.bind(this)}>Error</button>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    };
}

Main.propTypes = {

};

export default Main;
