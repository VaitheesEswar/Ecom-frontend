import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'
import Store from '../Store/reducers/Store.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>

<BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
)
