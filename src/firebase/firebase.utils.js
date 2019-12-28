import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyCdi8pljJfMZepu1GQVBDFGmLijAbopiQg",
  authDomain: "e-commercedb-e6800.firebaseapp.com",
  databaseURL: "https://e-commercedb-e6800.firebaseio.com",
  projectId: "e-commercedb-e6800",
  storageBucket: "e-commercedb-e6800.appspot.com",
  messagingSenderId: "578217366331",
  appId: "1:578217366331:web:06a94f1bf1e4f596891d1e",
  measurementId: "G-XEM040C00X"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const sigInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
