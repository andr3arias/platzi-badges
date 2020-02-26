import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import '../src/global.css'
import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge 
    firstName='Andre' 
    lastName='Arias' 
    jobTitle="Frontend Engineer" 
    twitter='andr3arias' 
    avatarUrl="https://es.gravatar.com/userimage/180410375/bde1659c9a07c3da0976375913c2a815.jpg" 
    />, container);
