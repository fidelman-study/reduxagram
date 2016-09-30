/**
 * Andrei Fidelman
 * 30/09/16
 * 18:45
 */
import React, { Component, PropTypes } from 'react';

class Comments extends Component {

    renderComment(comment, i) {

        const { removeComment, params: { postId }} = this.props;

        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={removeComment.bind(null, postId, i)}>&times;</button>
                </p>
            </div>
        );
    }

    handleSubmit(ev) {
        ev.preventDefault();
        const { author, comment, commentForm } = this.refs;
        const { postId } = this.props.params;
        this.props.addComment(postId, author.value, comment.value);
        commentForm.reset();
    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment.bind(this))}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        );
    };
}

Comments.propTypes = {

};

export default Comments;