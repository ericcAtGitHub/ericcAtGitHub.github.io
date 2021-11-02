import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as ReactBrowserRouter } from 'react-router-dom'

import Declar from './Declar'
import AppRoutes from './AppRoutes'

ReactDOM.render(
    <React.StrictMode>
        <Declar/>
        <ReactBrowserRouter>
            <AppRoutes />
        </ReactBrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
