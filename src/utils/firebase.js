import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBMnz1kGx8RT97Sggoqc_178veT0TQc3fo",
  authDomain: "clone-r-e6081.firebaseapp.com",
  databaseURL: "https://clone-r-e6081.firebaseio.com",
  projectId: "clone-r-e6081",
  storageBucket: "clone-r-e6081.appspot.com",
  messagingSenderId: "697129640780",
  appId: "1:697129640780:web:cba9dfad7b6140856ba5e9",
  measurementId: "G-7XS4EJ4R3C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()   
const authorization = firebase.auth()

export { db, authorization }