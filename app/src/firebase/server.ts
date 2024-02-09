import {
  initializeApp,
  getApps,
  applicationDefault,
} from "firebase-admin/app";

const activeApps = getApps();

export const app = activeApps.length === 0 ? initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://recipe-storage-bin-default-rtdb.firebaseio.com",
}) : activeApps[0];

// export const app = initializeApp();
