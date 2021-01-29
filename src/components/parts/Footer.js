import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import BrandLogo from 'assets/dist/icon/logo.svg';

export default function Footer() {
    // Fungsi Dinamic Copyright Year
    const [date, setDate] = useState()
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear()
    }, [])
    return (
        <footer className="footer-container">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <NavLink className="navbar-brand" to="/">
                            <img src={BrandLogo} alt="Safe us - Coronavirus Indonesia Live Data"/>
                        </NavLink>
                        <p className="brand-tagline">
                            Coronavirus disease (COVID-19) is an infectious disease caused by a new virus
                        </p>
                    </div>
                    <div className="col-md-2 mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <NavLink type="link" to="/contagion">Contagion</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink type="link" to="/symptoms">Symptoms</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink type="link" to="/prevention">Prevention</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <NavLink type="link" to="/our-careers">Our Careers</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink type="link" to="/privacy">Privacy</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink type="link" to="/term">Terms & Conditions</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h6 className="mt-2">Connect</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <NavLink type="link" to="mailto:support@safeus.id">support@safeus.id</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink type="link" to="tel:+6281912867512">+62 819-1286-7512</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink type="link" to="/address">Safeus, Denpasar, Bali</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center copyrights">
                        Copyright <span>{date}</span> • All rights reserved • Safeus ID
                    </div>
                </div>
            </div>
            
        </footer>
    )
}
