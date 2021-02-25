import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAInqLgHYlwa7uqaz3vUahMHzfIDt817wM",
  authDomain: "portfolio-a2f43.firebaseapp.com",
  databaseURL: "https://portfolio-a2f43.firebaseio.com",
  projectId: "portfolio-a2f43",
  storageBucket: "portfolio-a2f43.appspot.com",
  messagingSenderId: "169464974001",
  appId: "1:169464974001:web:49a624d19d0518a1c2b090"
}

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.database();
  }

  //Auth API//
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}
export default Firebase;
