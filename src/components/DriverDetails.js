import React from 'react'
import BannerBackground from '../assets/dtbackg.png';
import Driver from "../assets/driverpic.jpeg"
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
                        Name: Donald Trump<br/>
                        Phone Number: 9177568000<br/>
                        Estimated time of arrival: 5 min<br/>
                        Vehicle: Auto<br/>
                        Ride Fare: $45.0 <br/>
                        Rating: 4.5 <br/>
                        PickUp and Drop : Hyd,Sec <br/>
                        Email id: Donald@gmail.com<br/>
                    </p>
                </div>
    );
}

export default Home