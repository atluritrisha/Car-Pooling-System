import React from 'react'
import  Navbar  from './Navbar.js'
import BannerBackground from '../assets/dtbackg.png';
import BannerImage from '../assets/cph.png';
import {FiArrowRight} from "react-icons/fi"
import { Feedback } from '@mui/icons-material';
function Home() {
    return (
        <div className="home-container">
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt='Copenhagen, Denmark'/>
                </div>
                <div className='home-text-container'>
                    <h1 className='primary-heading'>
                        Need a Ride?
                    </h1>
                    <p className='primary-text'>
                        Carpooling is a sustainable transportation solution that connects people traveling in the same direction, allowing them to share a ride and split the costs. By carpooling, individuals can save money, reduce traffic congestion, and contribute to a cleaner environment by reducing greenhouse gas emissions. Join our carpooling community today and make a positive impact on the planet!
                    </p>
                    <br></br>
                    <div className='home-cont-img' style={{borderTopRightRadius: 60,borderBottomLeftRadius:60}}>
                <img src={BannerImage} alt=""/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Home