import React from 'react'
import BrandLogo from 'assets/dist/icon/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <header className="spacing-sm" data-aos="fade-down">
            <nav className="navbar navbar-expand-md navbar-light bg-white">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={BrandLogo} alt="Safe us - Coronavirus Indonesia Live Data"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-1">
                                <NavLink exact className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className="nav-link" to="/symptoms">Symptoms</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className="nav-link" to="/contagion">Contagion</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className="nav-link" to="/prevention">Prevention</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item-custom">
                                <a className="btn btn-custom btn-cta ml-1 d-flex align-items-center" href="/">
                                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Emergency Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
