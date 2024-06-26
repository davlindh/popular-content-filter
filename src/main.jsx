import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SupabaseProvider } from './integrations/supabase/index.js'
import { SupabaseAuthProvider } from './integrations/supabase/auth.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider>
      <SupabaseAuthProvider>
        <App />
      </SupabaseAuthProvider>
    </SupabaseProvider>
  </React.StrictMode>,
)
