import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

// import UserStore from './ReduxCrud/UserStore.js'
import LalitStore from './Lalit/LalitStore.js'
import RtkStore from './RTK/RtkStore.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={RtkStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)