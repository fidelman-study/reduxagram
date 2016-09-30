/**
 * Andrei Fidelman
 * 28/09/16
 * 13:06
 */
import { INCREMENT_LIKES } from '../constatns';

export default (state = [], action) => {
    const { type, index } = action;

    switch (type) {
        case INCREMENT_LIKES:
            return [
                ...state.slice(0, index),
                {...state[index], likes: state[index].likes + 1},
                ...state.slice(index + 1)
            ];
    }

    return state
}
