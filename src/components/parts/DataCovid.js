import React from 'react'
import { formatNumber } from 'helpers';
import { NavLink } from 'react-router-dom';

export default function DataCovid({ data }) {
    return (
        <section className="container data-container">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-6">

                    <div className="card card__body__covid">
                        
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="card__covid">
                                    <h3 className="data__country">Indonesia</h3>
                                    <p className="data__desc_1 mt-3">Country Confirmed</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card__covid">
                                    <h3 className="data__confirmed">{formatNumber(data?.confirmed?.value ?? 0)}</h3>
                                    <p className="data__desc_2 mt-3">Confirmed Cases</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card__covid">
                                    <h3 className="data__recovery">{formatNumber(data?.recovered?.value ?? 0)}</h3>
                                    <p className="data__desc_3 mt-3">Recovery Cases</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card__covid">
                                    <h3 className="data__death">{formatNumber(data?.deaths?.value ?? 0)}</h3>
                                    <p className="data__desc_4 mt-3">Death Cases</p>
                                </div>
                            </div>

                            <div className="col-md-5 text-center covid__source">
                                <p className="title__source">
                                    *** Data statistic COVID-19 in Indonesia, <NavLink to="/data">More Data</NavLink>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
