import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Slider() {
    const [slider, setSlider] = useState([]);

    const allRecord = () => {
        axios.get(`http://localhost:8000/slider`)
            .then((res) => {
                setSlider(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    useEffect(() => {
        allRecord();
    }, [])
    return (
        <div>
            <div>
                <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20102023-UrgencyStrip72-nowlive.gif' width={'100%'} />
            </div>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        slider.map((v,index) => {
                            return (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <img src={v.image} className="d-block w-100" alt="..." />
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <img src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05102023-BigShotBrands-Sectionheader.jpg' className='w-100'/>
        </div>
    )
}
