import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './scss/app.scss';
import App from './App';
import { Admin, Cart } from './pages';
import { Error } from './components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
        <Router>
            <Provider store={store}>
               <Routes>
                <Route path="/Admin" element={<Admin/>} exact />
                <Route path="/" element={<App/>} exact />
                <Route path="/cart" element={<Cart/>} exact />
                <Route path="*" element={<Error/>} exact />
                </Routes> 
            </Provider>
        </Router>    
    
); 
