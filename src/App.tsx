import React from 'react';
import './styles/app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/forms/LoginForm';
import IndexPage from './components/IndexPage'
import BaseLayout from './components/BaseLayout'
import PageNotFound from './components/errorResponse/PageNotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<IndexPage />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
