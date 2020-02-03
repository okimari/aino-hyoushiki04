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
import Calculation from './component/Calculation';
import Estimate from './component/Estimate';

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
  slide4: {
    backgraundColor: '#6AC0FF',
    // height: '100vh'
  },
  slide5: {
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
    user: null,

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
      // var uid = user.uid;
      console.log("user", user)
      //console.log("user", uid)
      //console.log("username", name);
      // firebase.firestore().collection('AuthDb').doc(`${user.uid}`)
      //   .set({
      //     uid: user.uid,
      //     name: 'string'
      //   })
    })
  }

  // 追加
  render() {
    //if (this.state.loading) return <div>loading</div>;
    return (
      <div className="Login" style={{ paddingTop: '120px' }}>
        <h1>ログイン</h1>
        <p>下の４つのどれかでログインしてね</p>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1><br />
            {/* Username: {this.state.user && this.state.user.displayName}<br /> */}
            <div className="Profile_img">
              <img
                alt="proaqqawqfile picture"
                src={firebase.auth().currentUser.photoURL}
                style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%'
                }}
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
            {/* <img src={logo} className="App-logo" alt="logo" style={{ width: '40%' }} /> */}
            <h1 style={{ fontSize: '100px', fontWeight: '300', position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%) translateX(-50%)' }}>愛の標識</h1>
          </div>
        </div>

        <div className="slide_view" id="slideSecond" style={Object.assign({}, styles.slide, styles.slide2)}>
          <p>アプリの使用方法だっちゃ</p>
          <SwiperBox />
        </div>

        <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide3)}>
          <div>
            <firstMessage />
          </div>
          <Auth />
        </div>

        <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide4)}>
          <div>
            <firstMessage />
          </div>
          <div className="moveBtn">
            <Question />
            {/* <BrowserRouter> */}
            {/* ここにルーターの部分を入れる */}
            {/* <div className="StartBtn">

              </div>
              <div>
                <Route path='/Question' component={Question} />
              </div>
            </BrowserRouter> */}
          </div>
        </div>

        <div id="fourth" style={Object.assign({}, styles.slide, styles.slide5)}>
          <p>お見積りを作成する</p>
          <BrowserRouter>
            {/* ここにルーターの部分を入れる */}
            <div className="StartBtn">
              <p><Calculation /></p>
            </div>
            <div>
              <Route path='/Estimate' component={Estimate} />
            </div>
            <p><Estimate /></p>
          </BrowserRouter>
        </div>

        {/* <div id="fifth" style={Object.assign({}, styles.slide, styles.slide5)}>
          <p>最終お見積りだす</p>
          <BrowserRouter> */}
        {/* ここにルーターの部分を入れる */}
        {/* <div className="StartBtn">
              <p><Start /></p>
            </div>
            <div>
              <Route path='/Estimate' component={Estimate} />
            </div>
          </BrowserRouter>
        </div> */}


      </SwipeableViews>

    </div>
  );
}


export default App;
