import React from 'react'
import BannerBackground from '../assets/dtbackg.png';
import Driver from "../assets/driver3.jpeg"
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
                    <p>Name: Emily Johnson</p>
                    <p>Phone Number: 9177568003</p>
                    <p>Estimated time of arrival: 8 min</p>
                    <p>Vehicle: Hatchback</p>
                    <p>Ride Fare: $40.0</p>
                    <p>Rating: 4.5</p>
                    <p>Email id: EmilyJohnson@gmail.com</p>
                    </p>
                </div>
    );
}

export default Home