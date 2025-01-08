import { UserManager } from "oidc-client-ts";
import React, { useEffect } from "react";
import { CAS_CONFIG } from "./configOAuth";

export default function Callback() {
  useEffect(() => {
    const mgr = new UserManager(CAS_CONFIG);
    mgr.signinRedirectCallback().then(() => {
      window.location.href = "/dashboard";
    });
  }, []);

  return <div></div>;
}
