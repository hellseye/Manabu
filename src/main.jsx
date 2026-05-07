import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* AuthProvider wraps everything so all pages can access login state */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
)
