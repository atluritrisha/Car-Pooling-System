import React from 'react'
import BannerBackground from '../assets/dtbackg.png';
import Driver from "../assets/driver1.jpeg"
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
                    <p>Name: John Doe</p>
                    <p>Phone Number: 9177568001</p>
                    <p>Estimated time of arrival: 7 min</p>
                    <p>Vehicle: Sedan</p>
                    <p>Ride Fare: $50.0</p>
                    <p>Rating: 4.7</p>
                    <p>Email id: JohnDoe@gmail.com</p>
                    </p>
                </div>
    );
}

export default Home