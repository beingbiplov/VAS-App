import React from 'react';
import './styles/app.css'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        < AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
