import React from 'react'
import BannerBackground from '../assets/dtbackg.png';
import Driver from "../assets/driver5.jpeg"
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
                    <p>Name: Olivia Wilson</p>
                    <p>Phone Number: 9177568005</p>
                    <p>Estimated time of arrival: 9 min</p>
                    <p>Vehicle: Luxury</p>
                    <p>Ride Fare: $60.0</p>
                    <p>Rating: 4.9</p>
                    <p>Email id: OliviaWilson@gmail.com</p>
                    </p>
                </div>
    );
}

export default Home