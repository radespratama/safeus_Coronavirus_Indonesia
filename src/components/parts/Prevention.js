import React from 'react'

export default function Prevention({data}) {
    console.log(data);
    return (
        <section className="container prevention-container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-10 text-center mb-4">
                    <span className="badge badge-info notification__covid mb-3" data-aos="fade-down" data-aos-delay="200">
                        <svg className="mr-1" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Covid-19 Prevention
                    </span>
                    <h1 className="covid__title mb-3" data-aos="fade-down" data-aos-delay="400">{data.title}</h1>
                    <p className="covid__description mb-4" data-aos="fade-down" data-aos-delay="600">
                        { data?.description }
                    </p>
                </div>
                
                {
                    data.details.map((preven, index) => {
                        return (
                            <div className="col-md-6" key={index} data-aos="fade-down" data-aos-delay={index * 300}>
                                <div className="card card__prevention d-block my-2 py-3 px-2">
                                    <div className="d-flex content align-items-center">
                                        <img src={preven.imageUrl} alt={preven.title}/>
                                        <div className="content__card">
                                            <h4 className="prevention__title ml-3">{preven.title}</h4>
                                            <p className="covid__description ml-3">{preven.sub_title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}
