/**
 * Andrei Fidelman
 * 28/09/16
 * 23:03
 */
import { connect } from 'react-redux';
import Main from './Main';
import { bindActionCreators } from 'redux';
import * as AC from '../actions/actionCreators';

function mapStateToProps(state) {
    const { posts, comments }= state;
    return { posts, comments};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AC, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;