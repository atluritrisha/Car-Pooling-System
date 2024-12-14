import React from 'react'
import BannerBackground from '../assets/dtbackg.png';
import Driver from "../assets/driver2.avif"
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
                    <p>Name: Jane Smith</p>
                        <p>Phone Number: 9177568002</p>
                        <p>Estimated time of arrival: 6 min</p>
                        <p>Vehicle: SUV</p>
                        <p>Ride Fare: $55.0</p>
                        <p>Rating: 4.8</p>
                        <p>Email id: JaneSmith@gmail.com</p>
                    </p>
                </div>
    );
}

export default Home