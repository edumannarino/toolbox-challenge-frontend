import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import App from './App'
import { reducer } from './redux/reducer'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore({ reducer })
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
