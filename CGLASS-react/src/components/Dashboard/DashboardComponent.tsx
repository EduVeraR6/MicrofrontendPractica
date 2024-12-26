import { useEffect } from "react";
import api from "../../services/axiosInterceptor";
import { UserManager } from "oidc-client-ts";
import { IDENTITY_CONFIG } from "../../oauthConfig/config";
import { Link } from "react-router-dom";

export function DashboardComponent() {
  var mgr = new UserManager(IDENTITY_CONFIG);

  useEffect(() => {
    api
      .get("/AgeAplicaciones")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);





  return (
    <>
       <button onClick={() => mgr.signoutRedirect()}>
						Log out
					</button>
      <Link to={"/remote"}>Remote</Link>
      <p>Dashboard</p>
    </>
  );
}
