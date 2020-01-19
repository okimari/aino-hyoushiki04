//firebaseと連携させているページ
import firebase from 'firebase';
// import 'firebase/auth';
import 'firebase/firestore';

//firebaseのKey
const config = {
    apiKey: "AIzaSyCsNOCJkAK7d2VVwRCSnyFZrpyfN5W5q4Q",
    authDomain: "aino-hyoushiki.firebaseapp.com",
    databaseURL: "https://aino-hyoushiki.firebaseio.com",
    projectId: "aino-hyoushiki",
    storageBucket: "aino-hyoushiki.appspot.com",
    messagingSenderId: "1047087563521",
    appId: "1:1047087563521:web:272817f02ea6e934541100"
}

//const firebaseApp = firebase.initializeApp(config);
// const Datadb = firebase.firestore().collection('anniversaryData');
export default firebase