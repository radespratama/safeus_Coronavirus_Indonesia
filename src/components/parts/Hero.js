import React from 'react'

import HeroImage from 'assets/dist/design/hero-image.png'
import Figure from 'assets/dist/design/Virus_1.png'

export default function Hero() {
    return (
        <section className="container hero-container">
            <div className="figure__background"><img src={Figure} alt="Coronavirus Disease"/></div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col__content__hero">
                    <span className="badge badge-info notification__covid mb-2" data-aos="fade-down" data-aos-delay="400">
                        <svg className="mr-1" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Covid-19 Alert
                    </span>
                    <h1 className="covid__title mb-3" data-aos="fade-down" data-aos-delay="600">Stay At Home Quarantine To Stop Corona Virus</h1>
                    <p className="covid__description mb-4" data-aos="fade-down" data-aos-delay="800">
                        There Is No Specific Medicine To Prevent Or Treat Coronavirus
                        Disease (COVID-19). People May Need Supportive Care To.
                    </p>
                    <div data-aos="fade-down" data-aos-delay="900">
                        <a href="/" className="btn btn-hero">Let us help</a>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 text-right col__image__hero">
                    <img src={HeroImage} className="image__hero" alt="Stay At Home Quarantine To Stop Corona Virus" data-aos="fade-right" data-aos-delay="400"/>
                </div>
            </div>
        </section>
    )
}