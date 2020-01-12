import React from 'react';
import SwiperBox from './Swiper';
import './Login.css';
import LoginOauth from './LoginStart';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Login extends React.Component {
    render() {
        return (
            <div>
                <SwiperBox />
                {/* <h1 className="concept" style={{ textAlign: "center" }}>
                    別れたい人への<br />
                    見積もりを<br />
                    作成しよう！
                </h1>
                <p className="subconcept">
                    あなたが彼氏に使用した<br />
                    時間とお金を請求しよう
                </p> */}
                <BrowserRouter>
                    <ul>
                        <li className="startBtn">
                            <Link to="/LoginStart" style={{ color: '#fff' }}>はじめる</Link>
                        </li>
                        <li className="ReLogin">
                            <Link to="/" style={{ color: '#fff' }}>再ログイン？</Link>
                        </li>
                    </ul>
                </BrowserRouter>
            </div >
        )
    }
}

export default Login;