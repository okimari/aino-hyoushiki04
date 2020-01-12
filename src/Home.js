import React from 'react';
import logo from './logo.png';
import './Home.css';


class Home extends React.Component {
    render() {
        return (
            <div className="Homeimg">
                <img src={logo} className="App-logo" alt="logo" style={{ width: '50 %' }} />
            </div>
        )
    }
}

export default Home;