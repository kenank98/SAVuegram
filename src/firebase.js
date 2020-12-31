import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyDNxg_AS9VJw-6uUWodZPGkaO-2YvjW9O4",
  authDomain: "fake-h-link.firebaseapp.com",
  databaseURL: "https://fake-h-link.firebaseio.com",
  projectId: "fake-h-link",
  storageBucket: "fake-h-link.appspot.com",
  messagingSenderId: "193607540595",
  appId: "1:193607540595:web:d344cb2e68aa1371042f06"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
