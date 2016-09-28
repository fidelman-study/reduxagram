/**
 * Andrei Fidelman
 * 28/09/16
 * 13:21
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import comments from './comments';
import posts from './posts';

export default combineReducers({
    comments, posts, routing : routerReducer
});