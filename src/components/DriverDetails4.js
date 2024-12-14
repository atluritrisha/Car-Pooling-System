import React from 'react'
import BannerBackground from '../assets/dtbackg.png';
import Driver from "../assets/driver4.webp"
function Home() {
    return (
        <div className='home-text-container'>
            <div className='driver-img-comtainer'>
            <img src={Driver} alt="rakesh"></img>
            </div>
            <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt='Copenhagen, Denmark'/>
                </div>
                    <h1 className='primary-heading'>
                       Ride Confirmed <br/>Driver Details
                    </h1>
                    <p className='primary-text'>
                    <p>Name: William Brown</p>
                    <p>Phone Number: 9177568004</p>
                    <p>Estimated time of arrival: 10 min</p>
                    <p>Vehicle: Mini</p>
                    <p>Ride Fare: $35.0</p>
                    <p>Rating: 4.6</p>
                    <p>Email id: WilliamBrown@gmail.com</p>
                    </p>
                </div>
    );
}

export default Home