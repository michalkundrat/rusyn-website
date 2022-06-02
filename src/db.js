// Get an RTDB instance
import firebase from 'firebase/compat/app';
import 'firebase/database'

export const db = firebase
  .initializeApp({ databaseURL: 'https://rusyn-website-default-rtdb.europe-west1.firebasedatabase.app/' })
  .database()