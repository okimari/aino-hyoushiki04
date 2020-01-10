import React from 'react';
import { Link } from 'react-router-dom'

class PathLink extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">HOMEだよ</Link>
                <Link to="/Login">LOGINだよ</Link>
                <Link to="/Question">Questionだよ</Link>
            </div>
        )
    }
}

export default PathLink;