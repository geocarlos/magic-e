import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {ConnectedRouter as Router, routerMiddleware} from 'react-router-redux';
import './index.css';
import App from './containers/App';
import {withRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const MagicE = withRouter(App);
const history = createHistory();
const routerMid = routerMiddleware(history);
const store = createStore(reducer, applyMiddleware(thunk, routerMid));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}><MagicE/></Router>
</Provider>,
document.getElementById('root'));

registerServiceWorker();
