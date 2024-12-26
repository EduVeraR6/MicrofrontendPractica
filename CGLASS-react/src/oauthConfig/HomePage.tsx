import { UserManager } from "oidc-client-ts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDENTITY_CONFIG } from "./config";

export function HomePage() {
    const navigate = useNavigate();
    
    useEffect(() => {
      const mgr = new UserManager(IDENTITY_CONFIG);
      mgr.getUser().then((user) => {
        if (!user) {
          // Si el usuario no está autenticado, redirige al login
          mgr.signinRedirect();
        } else {
          // Si ya está autenticado, redirige al dashboard
          navigate("/dashboard");
        }
      });
    }, [navigate]);
  
    return <p></p>;
  }