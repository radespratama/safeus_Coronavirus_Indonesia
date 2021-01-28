import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LottieComponents from 'react-lottie-player'
import LoadingAnima from 'assets/json/loading.json'

import Navbar from 'components/parts/Navbar'
import Hero from 'components/parts/Hero'
import ListCovid from 'components/parts/DataCovid'
import About from 'components/parts/About';
import Symptoms from 'components/parts/Symptoms';

import mockupResponse from 'assets/json/mockupResponse.json';
export default function LandingPage() {

    const [DataCovid, setDataCovid] = useState([])
    const [Loading, setLoading] = useState(false)
    const getCovidID = async() => {
        setLoading(true)
        try {
            let response = await axios.get(`${process.env.REACT_APP_HOST}`)
            setDataCovid(response.data)
            setLoading(false)

            // console.log(response.data);
        } catch (e) {
            setLoading(true)
            toast(e.message)
        }
    }

    useEffect(() => {
        getCovidID()
        window.scroll(0,0)
        document.title = "Safe us - Coronavirus Indonesia Live Data"
        AOS.init({ duration: 800 })
    }, [])

    if(Loading) return (
        <section className="container">
            <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="col-md-6 col-lg-6 col-sm-12 text-center">
                    <LottieComponents 
                        loop 
                        animationData={LoadingAnima}
                        play
                        style={{ height: 150 }}  
                    />
                </div>
            </div>
        </section>
    )
    return (
        <>
            <Navbar />
            <Hero />
            <ListCovid data={DataCovid} />
            <About data={mockupResponse.about} />
            <Symptoms data={mockupResponse.symptoms} />
        </>
    )
}
