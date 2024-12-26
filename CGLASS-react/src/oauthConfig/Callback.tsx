import { UserManager } from "oidc-client-ts";
import { useEffect } from "react";
import { IDENTITY_CONFIG } from "./config";

export function Callback() {
    useEffect(() => {
      const mgr = new UserManager(IDENTITY_CONFIG);
      mgr.signinRedirectCallback().then(() => {
        window.location.href = "/dashboard"; 
      });
    }, []);
  
    return <p></p>;
  }