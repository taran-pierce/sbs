import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyBSOZQz5Cc5OUlhp9IZ2vYD36g0JRdPzHs",
  authDomain: "recipe-storage-bin.firebaseapp.com",
  projectId: "recipe-storage-bin",
  storageBucket: "recipe-storage-bin.appspot.com",
  messagingSenderId: "672563078772",
  appId: "1:672563078772:web:bb49722652c1ce83c31321",
  measurementId: "G-R5C8G6HBJ1",
};

// const analytics = getAnalytics(app)

export const app = initializeApp(firebaseConfig);
