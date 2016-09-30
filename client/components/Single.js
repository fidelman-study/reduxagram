/**
 * Andrei Fidelman
 * 27/09/16
 * 19:33
 */
import React, { Component, PropTypes } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {

        const { posts, comments, params:{ postId } } = this.props;

        const i = posts.findIndex(post => post.code === postId);
        const post = posts[i];

        const postComments = comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        );
    };
}

Single.propTypes = {
    
};

export default Single;