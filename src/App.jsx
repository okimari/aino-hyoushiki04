import React, { useState, Component } from 'react';
import demo1 from './images/demo1.png';
import demo2 from './images/demo2.png';
import demo3 from './images/demo3.png';
import demo4 from './images/demo4.png';
import SwipeableViews from 'react-swipeable-views';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import firebase from './config/firebase';
import { render } from '@testing-library/react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './App.css';
import Question from './component/Question';
import { BrowserRouter, Route } from 'react-router-dom';
import Start from './component/Start';
import Calculation from './component/Calculation';
import Estimate from './component/Estimate';
import ReactDOM from 'react-dom';
import Separation from './component/Separation';
// import { render } from "react-dom";
import { Frame } from "framer";
import {
  BrowserRouter as Router,
  // Route,
  Switch,
  // useParams,
  useHistory,
  // useLocation,
} from 'react-router-dom';



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
      <div><img src={demo1} className="img" alt="デモ01" /></div>
      <div><img src={demo2} className="img" alt="デモ02" /></div>
      <div><img src={demo3} className="img" alt="デモ03" /></div>
      <div><img src={demo4} className="img" alt="デモ04" /></div>
    </Swiper >
  )
}

class Auth extends Component {
  state = {
    // isSingnedIn: false,
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
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user })
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  // 追加
  render() {
    return (
      <div className="Login" style={{ paddingTop: '120px' }}>
        <div className="wrapBox" style={{ background: "#F26152", textAlign: "center", padding: '70px 10px', borderRadius: '10px', border: 'solid 5px #fff' }}>
          <h1 style={{ fontSize: '70px', fontWeight: '400', paddingBottom: '20px' }}>愛の標識</h1>
          <p style={{ fontSize: '30px', paddingBottom: '10px' }}>LOGIN</p>
          <p>ログインしてね</p>
          {this.state.isSignedIn ? (
            <span>
              <div>Signed In!</div>
              <h1>Welcome</h1><br />
              <h2>{firebase.auth().currentUser.displayName}</h2><br />
              <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
              Username: {this.state.user && this.state.user.displayName}<br />
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

//質問形式のボタンの部分

const Status = () => {
  const history = useHistory();
  return (
    <div className="statusBtn">
      <div style={{ background: "#F26152", textAlign: "center", padding: '70px 10px', borderRadius: '10px', border: 'solid 5px #fff' }}>
        <h3 style={{ fontSize: '22px', paddingBottom: '20px', fontSize: '25px', lineHeight: '1.4' }}>恋人との<br />ステータスを選択してね</h3>
        <p style={{ fontSize: '20px', paddingBottom: '50px' }}>質問内容が異なるよ</p>
        <ul>
          <li>
            <button onClick={() => history.push('/status01')}>同居のかたはこちら</button>
          </li>
          <li>
            <button onClick={() => history.push('/status02')}>別居のかたはこちら</button>
          </li>
        </ul>
      </div>
    </div >
  )
}


function App() {
  //page遷移の定義をする
  let [index, setIndex] = useState(0);
  let [user, setUser] = useState();
  firebase.auth().onAuthStateChanged(user => {
    let uid = user;
    setUser(user);
  })



  //const isSignedIn = this.state.isSignedIn;
  return (
    <div className="App">

      <SwipeableViews enableMouseEvents onChangeIndex={index => { setIndex(index) }} index={index}>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <div className="homeTitle">
            <div className="wrapHomeTitle">
              <div className="border">
                <h1 style={{ fontSize: '70px' }}>愛の標識</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="slide_view" id="slideSecond" style={Object.assign({}, styles.slide, styles.slide2)}>
          <div className="demoImages">
            <div className="wrapDemoImages" style={{ background: "#F26152", textAlign: "center", padding: '70px 10px', borderRadius: '10px', border: 'solid 5px #fff' }}>
              <p style={{ fontSize: '28px', marginBottom: '20px' }}>使用方法です</p>
              <SwiperBox />
            </div>
          </div>
        </div>

        {/* ログイン画面 */}
        <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide3)}>
          <div>
            <firstMessage />
          </div>
          <Auth />
        </div>

        {/* 質問形式変更画面/同棲/別居 */}
        <div id="slideThird" style={Object.assign({}, styles.slide, styles.slide3)}>
          <div className="Questionrout">
            <div className="wrapQuestionrout">
              <div>
                <Router>
                  <Switch>
                    <Route path="/" exact>
                      <Status />
                    </Route>
                    <Route path="/status01" exact>
                      <Question user={user} />
                    </Route>
                    <Route path="/status02" exact>
                      <Separation user={user} />
                    </Route>
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
        </div>

        {/* 一覧画面 */}
        <div id="fourth" style={Object.assign({}, styles.slide, styles.slide5)}>
          <BrowserRouter>
            {/* ここにルーターの部分を入れる */}
            <div className="StartBtn">
              {/* <p><Calculation /></p> */}
            </div>
            <div>
              <Route path='/Estimate' component={Estimate} />
            </div>
            <p><Estimate user={user} /></p>
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
