// firebaseのログインButtonを定義しているページ
import React from 'react';
import firebase from '../config/firebase';
//import { firebase } from '@firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "/",
    signInOptions: [
        //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // firebase.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
}
// const Oauth = props => {
//     return (
//         // <div>
//         //     <p>Please sign-in:</p>
//         //     <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//         // </div>
//     );
// }
export default Oauth;
