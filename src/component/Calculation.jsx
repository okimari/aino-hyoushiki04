import React from 'react';
import { Link } from 'react-router-dom'

class Calculation extends React.Component {
    render() {
        return (
            <div>
                <Link to="/Estimate">計算</Link>
            </div>
        )
    }
}


export default Calculation;