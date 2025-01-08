import { UserManager } from 'oidc-client-ts';
import React, { useEffect, useState } from 'react'
import { CAS_CONFIG } from '../oauthConfig/configOAuth';
import { BrowserRouter , Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Callback from '../oauthConfig/Callback';
import RedirectPage from '../oauthConfig/RedirectPage';
import AppRouterMicro from 'micro1/routes/AppRouter'
export default function AppRouter() {

    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
      const mgr = new UserManager(CAS_CONFIG);
      mgr.getUser().then((user) => {
        if (user) {
          setAutenticado(true);
        }
      });
    }, [autenticado]);


  return (
    <BrowserRouter>
      <Routes>
        {autenticado ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home/*" element={<AppRouterMicro/>}  />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <>
            <Route path="/signin-oidc" element={<Callback />} />
            <Route path="/" element={<RedirectPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
        <Route path="*" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  )
}
