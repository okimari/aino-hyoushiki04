import React from 'react';
import { Link } from 'react-router-dom'

class Start extends React.Component {
    render() {
        return (
            <div>
                <Link to="/Question">はじめる</Link>
            </div>
        )
    }
}


export default Start;