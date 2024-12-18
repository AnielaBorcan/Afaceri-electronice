import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCOAVkkD9wThGPuvq1t_lPcGjqiQRmZ7MQ",
    authDomain: "afaceri-electronice-idm.firebaseapp.com",
    projectId: "afaceri-electronice-idm",
    storageBucket: "afaceri-electronice-idm.appspot.com",
    messagingSenderId: "822974514139",
    appId: "1:822974514139:web:95f8ce200c14b7f1271dfe"
  };

const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
export const storage = getStorage(app)
export default app;
