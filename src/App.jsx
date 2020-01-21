import React, { useState, Component } from 'react';
import logo from './images/logo.png';
import img from './images/img.png';
import SwipeableViews from 'react-swipeable-views';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
//import Button from '@material-ui/core/Button';
import firebase from './config/firebase';
import { render } from '@testing-library/react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
//import firebase from './config/firebase';
import './App.css';
import Question from './component/Question';
import { BrowserRouter, Route } from 'react-router-dom';
import Start from './component/Start';

// SwiperのStyle
const styles = {
  slide: {
    // padding: 15,
    // minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgraundColor: '#FEA900',
    // height: '100vh'
  },
  slide2: {
    backgraundColor: '#B3DC4A',
    // height: '100vh'
  },
  slide3: {
    backgraundColor: '#6AC0FF',
    // height: '100vh'
  },
};

// Swiperを定義
const SwiperBox = () => {
  const params = {
    initialSlide: 3,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      //nextEl: ".swiper-button-next",
      //prevEl: ".swiper-button-prev"
    },
    spaceBetween: 50,
    loop: true,
    autoplay: true,
    //getSwiper: updateSwiper // Get swiper instance callback
  };
  return (
    <Swiper{...params}>
      <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
      <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
      <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
      <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
      <div style={{ background: "#F26152", textAlign: "center" }}><img src={img} className="img" alt="img" /></div>
    </Swiper >
  )
}

// Authの設定
// firebase.initializeApp({
//   apiKey: "AIzaSyCsNOCJkAK7d2VVwRCSnyFZrpyfN5W5q4Q",
//   authDomain: "aino-hyoushiki.firebaseapp.com",
//   databaseURL: "https://aino-hyoushiki.firebaseio.com",
//   projectId: "aino-hyoushiki",
//   storageBucket: "aino-hyoushiki.appspot.com",
//   messagingSenderId: "1047087563521",
//   appId: "1:1047087563521:web:272817f02ea6e934541100"
// })

class Auth extends Component {
  state = {
    //isSingnedIn: false
    loading: true,
    user: null
  }
  uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // firebase.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  // 追加
  render() {
    //if (this.state.loading) return <div>loading</div>;
    return (
      <div className="Login">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            {/* Username: {this.state.user && this.state.user.displayName}<br /> */}
            <div className="Profile_img">
              <img
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
              />
            </div>
          </span>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>
    )
  }
}

const firstMessage = () => {
  return (
    <div className="Message">
      <p className="hidden" style={{ fontSize: '34px', letterSpacing: '1.5px', fontWeight: "bold", lineHeight: '1.3' }}>
        別れたい人への<br />
        見積もりを<br />
        作成しよう！
      </p>
    </div>
  );
}

function App() {
  //page遷移の定義をする
  let [index, setIndex] = useState(0);
  render()
  //const isSignedIn = this.state.isSignedIn;
  return (
    <div className="App">
      <SwipeableViews enableMouseEvents onChangeIndex={index => { setIndex(index) }} index={index}>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <div className="Homeimg">
            <img src={logo} className="App-logo" alt="logo" style={{ width: '40%' }} />
          </div>
        </div>
        <div id="slideSecond" style={Object.assign({}, styles.slide, styles.slide1)}>
          <SwiperBox />
        </div>
        <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide1)}>
          <div>
            <firstMessage />
            <p className="hidden" style={{ fontSize: '34px', letterSpacing: '1.5px', fontWeight: "bold", lineHeight: '1.3' }}>別れたい人への<br />
              お見積もりを<br />
              作成しよう！
            </p>
            {/* <p style={{ fontSize: '22px', letterSpacing: '1.5px' }}>質問に答えてね・ω・</p> */}
          </div>
          <Auth />
          <div className="moveBtn">
            <BrowserRouter>
              {/* ここにルーターの部分を入れる */}
              <div className="StartBtn">
                <p><Start /></p>
              </div>
              <div>
                <Route path='/Question' component={Question} />
              </div>
            </BrowserRouter>

            {/* <Button className="firstBtn" onClick={() => { setIndex(++index) }}>
              はじめる
            </Button> */}
          </div>
        </div>
      </SwipeableViews>
    </div>
  );
}


export default App;
