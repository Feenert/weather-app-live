import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Search} from './App';
import {Weather} from './Today';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search />
    <Weather />
  </React.StrictMode>
);
