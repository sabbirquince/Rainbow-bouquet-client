import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQawmuqKLtqTPwkD9Eust0OwsyGX5ZDWU",
  authDomain: "rainbow-bouquet.firebaseapp.com",
  projectId: "rainbow-bouquet",
  storageBucket: "rainbow-bouquet.appspot.com",
  messagingSenderId: "960137663553",
  appId: "1:960137663553:web:c69254dff7c1b3eba5e2c0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      return user;
    });
};
