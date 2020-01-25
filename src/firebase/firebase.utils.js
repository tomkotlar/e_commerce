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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }
  return userRef
}


export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  // console.log(collectioRef)

  const batch = firestore.batch()
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    // console.log(newDocRef)
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
