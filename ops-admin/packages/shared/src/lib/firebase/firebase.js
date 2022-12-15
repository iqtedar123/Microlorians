import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  initializeAuth,
  browserLocalPersistence,
  browserPopupRedirectResolver,
  indexedDBLocalPersistence,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAykX19aNWn5w33Igy16fQv559mgM7GtEo',
  authDomain: 'microlorians.firebaseapp.com',
  projectId: 'microlorians',
  storageBucket: 'microlorians.appspot.com',
  messagingSenderId: '791857598478',
  appId: '1:791857598478:web:69882abcec191447b22c5f',
  measurementId: 'G-X24KV8H7Z2',
};

const app = initializeApp(config);

const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence],
});

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider, browserPopupRedirectResolver);

export const isSignedIn = () => localStorage.getItem('user') !== null;

export const logout = async () => {
  await signOut(auth)
    .then((result) => {
      localStorage.removeItem('user');
    })
    .catch((e) => console.error(e));
};
