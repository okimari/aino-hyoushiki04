import React, { Component } from 'react';
import firebase from './plugin/firebase';
import Oauth from './Oauth';
import logo from './logo.png';
import PathLink from './Button';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
// import Question from './Question';
import Home from './Home';
import SwiperBox from './Swiper';


class App extends Component {
  state = {
    loading: true,
    user: null
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.setState({
        loading: false,
        user: user

      });
    });
  }
  logout() {
    firebase.auth().signOut();
  }
  render() {
    if (this.state.loading) return <div>loading</div>;
    return (
      <div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <SwiperBox />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Username: {this.state.user && this.state.user.displayName}
        <br />
        {this.state.user ?
          (<button onClick={this.logout}>Logout</button>) :
          <Oauth />
        }
        <div className="Apple">
          <BrowserRouter>
            <div>
              <PathLink /><hr />
              {/* ホーム画面の指定だけ違う exactが記述される */}
              <Route exact path='/' component={Home} />
              {/* <Router paht='/Home' component={Home} /> */}
              {/* 各画面の時はexactの記述はいらない */}
              <Route path='/Login' component={Login} />
              {/* <Router paht='/' component={Question} /> */}

              {/* Ruteからコンポーネントに情報を受け渡す方法は以下の書き方 */}
              {/* <Router path='/About' render={ () => <About name={'Tom'} />}/> */}

            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}



export default App;