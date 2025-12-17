
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDluCad0ZU4_6-65gGQg6rqjAW_kv-A80",
  authDomain: "lalit-5bb78.firebaseapp.com",
  projectId: "lalit-5bb78",
  storageBucket: "lalit-5bb78.firebasestorage.app",
  messagingSenderId: "427878479788",
  appId: "1:427878479788:web:847f34dae89e2304ba2c09",
  measurementId: "G-RD2JVT879W"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}