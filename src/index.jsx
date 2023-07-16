import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
// import 'lib-flexible/flexible'
import './index.less'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  // </React.StrictMode>,
)
