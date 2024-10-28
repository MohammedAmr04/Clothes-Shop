import React from 'react';
import './Navabar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    function changeActive(e) {
        const currentActive = document.querySelector('.nav-link.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        e.target.classList.add('active');
    }

    return (
        <div className='header'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#" style={{ color: 'red', fontFamily: "CCKillJoyOutline" }}>LAQUATTRO</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent">
                            <ul className="nav">
                                <li className="nav-item ps-2 pe-2" >
                                    <Link
                                        className="nav-link active" 
                                        aria-current="page"
                                        to="#"
                                        onClick={changeActive}
                                    >
                                        Active
                                    </Link>
                                </li>
                                <li className="nav-item ps-2 pe-2">
                                    <Link
                                        className="nav-link"
                                        to="#"
                                        onClick={changeActive}
                                    >
                                        Link
                                    </Link>
                                </li>
                                <li className="nav-item ps-2 pe-2">
                                    <Link
                                        className="nav-link"
                                        to="#"
                                        onClick={changeActive}
                                    >
                                        Link
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
