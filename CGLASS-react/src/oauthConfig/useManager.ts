import { UserManager, WebStorageStateStore } from "oidc-client-ts";
import { IDENTITY_CONFIG } from "./config";

export const userManager = new UserManager({
  ...IDENTITY_CONFIG,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});
