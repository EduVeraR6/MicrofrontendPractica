import React, { useEffect } from "react";
import { CAS_CONFIG } from "../oauthConfig/configOAuth";
import { UserManager } from "oidc-client-ts";
import api from "../services/interceptor";
import { Link } from "react-router-dom";

export default function Dashboard() {
  var mgr = new UserManager(CAS_CONFIG);

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
      <button className="p-3 m-2 rounded bg-slate-700 text-white" onClick={() => mgr.signoutRedirect()}>Log out</button>
      <Link className="p-3 m-2 rounded bg-slate-950 text-white" to={"/home"}>Remote</Link>
      <p>Dashboard</p>
    </>
  );
}
