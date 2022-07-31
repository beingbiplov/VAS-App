import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from '../components/pages/LoginForm';
import IndexPage from '../components/IndexPage'
import BaseLayout from '../components/BaseLayout'
import ClientRegisterForm from '../components/pages/ClientRegisterForm'
import ClientRegistrationConfirm from '../components/pages/ClientRegistrationConfirm'
import PageNotFound from '../components/errorResponse/PageNotFound'

function AppRoutes(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<IndexPage />} />
            <Route path="login" element={<LoginForm />} />
            <Route path='register' element={<ClientRegisterForm />} />
            <Route path='confirm-registration' element={< ClientRegistrationConfirm />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default AppRoutes