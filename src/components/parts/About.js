import React from 'react'
import AboutImage from 'assets/dist/design/about-image.png'
import Figure from 'assets/dist/design/Virus_2.png'

export default function About({ data }) {
    return (
        <section className="container about-container">
            <div className="figure__background__2"><img src={Figure} alt="Coronavirus Disease"/></div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                    <div className="col__image__about">
                        <img src={AboutImage} className="image__about" alt="Coronaviruses are a large family of viruses" data-aos="fade-right"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                    <span className="badge badge-info notification__covid mb-3" data-aos="fade-down" data-aos-delay="200">
                        <svg className="mr-1" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        About Covid-19
                    </span>
                    <h3 className="covid__subtitle" data-aos="fade-down" data-aos-delay="400">What is Covid - 19</h3>
                    <h1 className="covid__title mb-3" data-aos="fade-down" data-aos-delay="600">Coronavirus</h1>
                    <p className="covid__description mb-4" data-aos="fade-down" data-aos-delay="800">
                        { data?.description }
                    </p>
                    <div data-aos="fade-down" data-aos-delay="900">
                        <a href="/learn" className="btn btn-custom">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
