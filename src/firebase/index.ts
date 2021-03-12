import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBT5gFzYD1ZZ4Ll6DqgXa8525n-CzS_l_M',
  authDomain: 'rdo-develop.firebaseapp.com',
  databaseURL: 'https://rdo-develop-default-rtdb.firebaseio.com',
  projectId: 'rdo-develop',
  storageBucket: 'rdo-develop.appspot.com',
  messagingSenderId: '678360852844',
  appId: '1:678360852844:web:71562a4dbcc552a4d42b49',
  measurementId: 'G-QYHXCHPSPL',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase };
