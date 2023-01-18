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
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

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

export const db = getFirestore(app);

export const getDocsFromFirestore = async (collectionName) => {
  const data = await getDocs(collection(db, collectionName));
  return data;
};

export const getDocsFromFirestoreSubscribe = (collectionName, setDocs) => {
  return onSnapshot(collection(db, collectionName), (snapshot) => {
    let myDataArray = [];
    snapshot.forEach((doc) => myDataArray.push({ ...doc.data(), id: doc.id }));
    setDocs(myDataArray);
  });
};

const storage = getStorage(app);

export const handleUpload = (file) => {
  if (!file) {
    alert('Please choose a file first!');
  }
  const date = new Date();
  const storageRef = ref(storage, `/files/${date.getTime()}-${file.name}`);
  const uploadTask = uploadBytes(storageRef, file);
  return uploadTask;
};

export const getImageUrl = async (ref) => {
  return await getDownloadURL(ref);
};

export const createDocument = async (collectionName, data) => {
  return await addDoc(collection(db, collectionName), data);
};

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
