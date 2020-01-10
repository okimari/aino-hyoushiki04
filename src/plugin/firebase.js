//firebaseと連携させているページ
import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';

//firebaseのKey
const config = {

}

const firebaseApp = firebase.initializeApp(config);
//firebase.initializeApp(config);

//firebaseのauthの宣言
// export const providerGoogle = new firebase.auth.GoogleAuthProvider();
// export const providerFacebook = new firebase.auth.FacebookAuthProvider();
// export const providerTwitter = new firebase.auth.TwitterAuthProvider();
// export const providerGithub = new firebase.auth.GithubAuthProvider();

// export const db = firebase.firestore();
// export const firestore = firebase.firestore();

export default firebase

// export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
// export const firebaseApp = firebase.initializeApp(config)
// export const firebaseDB = firebase.firestore()