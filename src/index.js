import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './App';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
    reducers // All Reducers, Combined Reducers
);

ReactDOM.render(
    <Provider store={store}>
        <Header />
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();