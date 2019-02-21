import app from "firebase";
import 'firebase/auth';

// firebase init
var config = {
    apiKey: "AIzaSyBQztuj679xUOJVdxz5cZtwJouU8f16P2c",
    authDomain: "berks-technology-club-360.firebaseapp.com",
    databaseURL: "https://berks-technology-club-360.firebaseio.com",
    projectId: "berks-technology-club-360",
    storageBucket: "berks-technology-club-360.appspot.com",
    messagingSenderId: "398122766237"
  };

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth;
  }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}

export default Firebase;