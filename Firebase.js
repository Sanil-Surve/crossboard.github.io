import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXTMgTZkh_l41ebacEYj0_Z3EWtnOFfi0",
  authDomain: "crossboard-1172b.firebaseapp.com",
  projectId: "crossboard-1172b",
  storageBucket: "crossboard-1172b.appspot.com",
  messagingSenderId: "612350253183",
  appId: "1:612350253183:web:ef8c7dbfe57e88ce54874a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;