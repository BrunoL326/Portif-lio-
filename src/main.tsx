import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Start/App'
import Changes from './Sobre/Mim';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
.render(
  <React.StrictMode>
    <App />
    <Changes/>
  </React.StrictMode>,
);

