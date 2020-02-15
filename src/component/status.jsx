import react from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';




const Status = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/Question01'>同居</Link></li>
                <li><Link to='/Question02'>別居</Link></li>
            </ul>

            <hr />
            <Route path='/Question01' component={Question01} />
            <Route path='/Question02' component={Question02} />
        </div>
    </BrowserRouter>
)





export default status;