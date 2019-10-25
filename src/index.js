/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 15:11:50
 * @LastEditTime: 2019-10-18 17:02:02
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app/app';                                                          



ReactDOM.render(<BrowserRouter>
        <App/>
        </BrowserRouter>,
        document.getElementById("root")
    );