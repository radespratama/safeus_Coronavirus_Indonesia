import React from 'react'
import SymptomsImage from 'assets/dist/design/symptoms-image.png'

export default function Symptoms({data}) {
    return (
        <section className="container symptoms-container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <span className="badge badge-info notification__covid mb-3" data-aos="fade-down" data-aos-delay="200">
                        <svg className="mr-1" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Covid-19 Symptoms
                    </span>
                    <h1 className="covid__title mb-3" data-aos="fade-down" data-aos-delay="400">What are the Symptoms ?</h1>
                    <p className="covid__description mb-4" data-aos="fade-down" data-aos-delay="500">
                        { data?.description }
                    </p>
                    <div className="component__symptoms d-flex align-items-center">
                        <div className="row">
                        { data.details.map((detail, index) => {
                                return (
                                    <div className="col-md-6" key={index}>
                                        <div className="card d-block my-2" data-aos="fade-down" data-aos-delay={index * 500}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 icons-svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="icon__text">{detail.name}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <img src={SymptomsImage} alt="COVID-19 symptoms range from mild to severe. It takes 2-14 days after exposure for symptoms to develop." className="bg__image" data-aos="fade-left"/>
                </div>
            </div>
        </section>
    )
}
