import Rebase from 're-base'
import firebase from 'firebase'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASOc7l1zczuMgstmp7L6m5AKY2IjdKOTU",
    authDomain: "chatbox-app-c138d.firebaseapp.com",
    databaseURL: "https://chatbox-app-c138d-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
