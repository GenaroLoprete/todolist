import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
//usamos el componente Provider para usar el storage
const store = configureStore();
render(
    <Provider store={store}> 
        <App />
    </Provider>
    , document.getElementById('root'));

//importamos solo render para hacerlo un poco mas chiquito y no tener que importar reactDom entero
//pasamos las props dentro del tag XDDDD