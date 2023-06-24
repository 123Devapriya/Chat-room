import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDGK1iNY4CMHB-Hvu4yzodUNgDdBLRdCs8",
  authDomain: "chat-room-f9a10.firebaseapp.com",
  projectId: "chat-room-f9a10",
  storageBucket: "chat-room-f9a10.appspot.com",
  messagingSenderId: "120606484217",
  appId: "1:120606484217:web:c0623a9425e9a8a1602428",
  measurementId: "G-CZM3Y5RVK7"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }