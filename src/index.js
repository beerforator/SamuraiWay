import './index.css';
import reportWebVitals from './reportWebVitals';
import store_redux from './buisnessData/store-redux.js'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
// import AppContext from './buisnessData/context.js';

window.state = store_redux.getState()

const root = ReactDOM.createRoot(document.getElementById('root'));

const RenderApp = (store_redux) => {
    root.render(
        <React.StrictMode>
            <Provider store={store_redux}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}

RenderApp(store_redux)

store_redux.subscribe(() => {
    RenderApp(store_redux)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
