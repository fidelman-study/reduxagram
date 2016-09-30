/**
 * Andrei Fidelman
 * 28/09/16
 * 13:20
 */
import { ADD_COMMENT, REMOVE_COMMENT } from '../constatns';

function postComments(state = [], action) {
    const { type, author, comment, i } = action;

    switch (type) {
        case ADD_COMMENT:
            return [
                ...state,
                {
                    user: author,
                    text: comment
                }
            ];

        case REMOVE_COMMENT:
            return [
                ...state.slice(0,i),
                ...state.slice(i + 1)
            ];
    }


    return state
}

export default (state = [], action) => {
    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}