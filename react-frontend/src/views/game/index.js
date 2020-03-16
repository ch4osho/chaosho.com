import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'

import store from './../../redux/store.js'

import Sdk from './index.jsx'

ReactDom.render(
    <Provider store={store}>
        <Sdk/>
    </Provider>
    ,
    document.getElementById('chaos')
);

