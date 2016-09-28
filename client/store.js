/**
 * Andrei Fidelman
 * 27/09/16
 * 21:16
 */
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'
import reducer from './reducers';
import { browserHistory } from 'react-router';
import posts from './data/posts';
import comments from './data/comments';

const defaultState = {posts, comments};
const store = createStore(reducer, defaultState);
window.store = store;

export const history = syncHistoryWithStore(browserHistory, store);

export default store;