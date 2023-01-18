import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return <nav className="navbar navbar-light bg-light">
        <div className='container'>
            <div className='d-flex'>
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <Link className="nav-link active" to='/profile'>
                    Profile
                </Link>
            </div>
        </div>
    </nav>
}

export default Navbar;