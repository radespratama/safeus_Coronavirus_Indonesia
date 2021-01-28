import React from 'react'
import { Link } from 'react-router-dom'

import LottieComponent from 'react-lottie-player';
import ErrorLoading from 'assets/json/404-error-cat.json';

export default function ErrorPage() {
    return (
        <section className="container">
            <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 col-lg-6 text-center">
                    <LottieComponent
                    loop
                    animationData={ErrorLoading}
                    play
                    style={{ height: 400 }}
                    />
                    <Link to="/" className="btn btn-custom">
                        Back to home
                    </Link>
                </div>
            </div>
        </section>
    )
}
