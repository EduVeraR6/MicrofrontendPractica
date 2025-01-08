import { UserManagerSettings } from "oidc-client-ts";

export const CAS_CONFIG : UserManagerSettings = {
    authority: "https://localhost:5005/oauth-dotnet",
    client_id: "cglass_client", 
    redirect_uri: "http://localhost:4001/signin-oidc", 
    post_logout_redirect_uri: "http://localhost:4001", 
    popup_post_logout_redirect_uri: "http://localhost:4001",
    response_type: "code", 
    scope: "openid profile email ageAPI roles offline_access", 
    loadUserInfo: false, 
}
