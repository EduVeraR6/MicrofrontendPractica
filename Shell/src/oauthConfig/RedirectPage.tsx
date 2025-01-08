import { UserManager } from 'oidc-client-ts';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CAS_CONFIG } from './configOAuth';

export default function RedirectPage() {
    const navigate = useNavigate();
    
    useEffect(() => {
        const mgr = new UserManager(CAS_CONFIG);
        mgr.getUser().then((user) => {
          if (!user) {
            mgr.signinRedirect();
          } else {
            navigate("/dashboard");
          }
        });
      }, [navigate]);


  return (
    <div></div>
  )
}
