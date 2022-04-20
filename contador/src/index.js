// React < 18
/**
import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';

import './index.css';


const divRoot = document.querySelector('#app');

// ReactDOM.render( <PrimeraApp saludo={ 'Hola Mundo' } />  , divRoot );
ReactDOM.render( <CounterApp value={ 10 } />  , divRoot );
*/

// React 18
import React from 'react';
import { createRoot } from 'react-dom/client';
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';

import './index.css';


const divRoot = document.querySelector('#app');
const root = createRoot( divRoot );

root.render( <CounterApp value={ 10 } /> );
