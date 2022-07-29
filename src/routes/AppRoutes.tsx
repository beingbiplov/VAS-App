import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from '../components/pages/LoginForm';
import IndexPage from '../components/IndexPage'
import BaseLayout from '../components/BaseLayout'
import PageNotFound from '../components/errorResponse/PageNotFound'

function AppRoutes(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<IndexPage />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default AppRoutes