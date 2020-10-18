import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD-OBa_D5u6_3SKQPCN421FTsSjIZlhd3g',
  authDomain: 'hackhouse-40180.firebaseapp.com',
  databaseURL: 'https://hackhouse-40180.firebaseio.com',
  projectId: 'hackhouse-40180',
  storageBucket: 'hackhouse-40180.appspot.com',
  messagingSenderId: '688457122022',
  appId: '1:688457122022:web:abd70e49ab332b026b7b27',
  measurementId: 'G-HVBVV95GHF',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export const DBadduser = async (name) => {
  const ref = db.collection('room').doc('kvOJ1KrHegxsTyM5AONv').collection('user')
  await ref.add({ username: name })
}
