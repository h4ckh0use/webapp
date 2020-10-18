import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

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

export const resetTimer = async () => {
  const apple = db.collection('room').doc('kvOJ1KrHegxsTyM5AONv')
  apple.update({ timer: firebase.firestore.FieldValue.delete() })
  DBaddTime()
}

export const DBaddTime = async () => {
  const date = new Date()
  const date_25 = new Date(date.getTime() + 25 * 60000)
  console.log('ADDED TIMER:', date_25)
  const ref = db.collection('room').doc('kvOJ1KrHegxsTyM5AONv')
  await ref.set({ timer: new Date(date_25) })
}

export const currTimer = async (callback) => {
  const ref = db.collection('room').doc('kvOJ1KrHegxsTyM5AONv')
  return ref.get().then(function (doc) {
    callback(doc.data())
  })
}
