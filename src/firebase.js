import firebase from 'firebase';

const config = {

  apiKey: "AIzaSyA6VIOYrlUA16YsDvzZyBNbHgLG5InLfRQ",
  authDomain: "unscript-2afdb.firebaseapp.com",
  databaseURL: "https://unscript-2afdb.firebaseio.com",
  projectId: "unscript-2afdb",
  storageBucket: "unscript-2afdb.appspot.com",
  messagingSenderId: "1024228468625",
  appId: "1:1024228468625:web:7ef6146640053812f51c30",
  measurementId: "G-Q690CD5EW7"
};
firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();