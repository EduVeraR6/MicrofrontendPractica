import { UserManagerSettings } from "oidc-client-ts";

export const IDENTITY_CONFIG: UserManagerSettings = {
    authority: "http://192.168.0.115:5005/oauth-dotnet",
    client_id: "cglass_client", 
    redirect_uri: "http://localhost:5173/signin-oidc", 
    post_logout_redirect_uri: "http://localhost:5173", 
    popup_post_logout_redirect_uri: "http://localhost:5173",
    response_type: "code", 
    scope: "openid profile email ageAPI roles offline_access", 
    loadUserInfo: false, 
  };
  


