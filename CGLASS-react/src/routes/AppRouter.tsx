import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../oauthConfig/HomePage";
import { useEffect, useState } from "react";
import { UserManager } from "oidc-client-ts";
import { IDENTITY_CONFIG } from "../oauthConfig/config";
import { DashboardComponent } from "../components/Dashboard/DashboardComponent";
import { Callback } from "../oauthConfig/Callback";
import Home from 'remote/pages/Home';



function AppRouter() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const mgr = new UserManager(IDENTITY_CONFIG);
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
            <Route path="/dashboard" element={<DashboardComponent />} />
            <Route path="/remote" element={<Home name='Edison' />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <>
            <Route path="/signin-oidc" element={<Callback />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
