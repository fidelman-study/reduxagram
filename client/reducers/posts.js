/**
 * Andrei Fidelman
 * 28/09/16
 * 13:06
 */


export default (state = [], action) => {
    const { type, payload, response, error } = action;

    switch (type) {
        case 'INCREMENT_LIKES':
            return state;
        case 'ADD_COMMENT':
            return state;
        case 'REMOVE_COMMENT':
            return state;
    }

    return state
}