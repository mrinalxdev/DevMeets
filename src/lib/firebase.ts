import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdbLigKNw_hOU6N-DoXBKga94oOM_ViUs",
  authDomain: "devmeet-92cbc.firebaseapp.com",
  projectId: "devmeet-92cbc",
  storageBucket: "devmeet-92cbc.appspot.com",
  messagingSenderId: "29348967457",
  appId: "1:29348967457:web:92c7391e609bef110adf60",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users");
export const meetingRef = collection(firebaseDB, "meetings");
