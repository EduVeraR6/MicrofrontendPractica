import { UserManager, WebStorageStateStore } from "oidc-client-ts";
import { CAS_CONFIG } from './configOAuth';

export const userManager = new UserManager({
    ...CAS_CONFIG,
    userStore: new WebStorageStateStore({ store: window.localStorage }),
});
  