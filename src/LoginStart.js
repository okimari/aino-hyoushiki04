import React from 'react';
import './LoginStart.css';
import Oauth from './Oauth';


class LoginOauth extends React.Component {
    render() {
        return (
            <div className="AppConcept">
                <h1 className="concept" style={{ textAlign: "center" }}>
                    別れたい人への<br />
                    見積もりを<br />
                    作成しよう！
                </h1>
                <p className="subconcept">
                    あなたが彼氏に使用した<br />
                    時間とお金を請求しよう
                </p>
                <Oauth />
            </div>
        )
    }
}

export default LoginOauth;

