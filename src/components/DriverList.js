
import React from 'react';
import BannerBackground from '../assets/dtbackg.png'; // Update the path to your actual image
import { Link } from 'react-router-dom';

const DriverList = () => {
    
    const confirmRide = (driver) => {
        alert(`Ride Confirmed with ${driver.name}! Thank you for choosing our service.`);
    };

    return (
        <>
            <div className='Driver-text-container'>
                <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt='Copenhagen, Denmark' />
                </div>
                <h1 className='Driver-heading'>
                    Driver Details
                </h1>
            </div>
            <div className="driver-list-container">
                <div className="driver-list" onClick={() => confirmRide({ name: 'John Doe', phoneNumber: '9177568001', estimatedTime: '7 min', vehicle: 'Sedan', fare: '$50.0', rating: '4.7', email: 'JohnDoe@gmail.com' })}>
                    <Link to='/DriverDetails1'>
                        <button className='primary-button'>
                            <p>Name: John Doe</p>
                           
                            <p>Estimated time of arrival: 7 min</p>
                            <p>Vehicle: Sedan</p>
                            <p>Ride Fare: $50.0</p>
                            <p>Rating: 4.7</p>
                           
                        </button>
                    </Link>
                </div>
                <div className="driver-list" onClick={() => confirmRide({ name: 'Jane Smith', phoneNumber: '9177568002', estimatedTime: '6 min', vehicle: 'SUV', fare: '$55.0', rating: '4.8', email: 'JaneSmith@gmail.com' })}>
                    <Link to='/DriverDetails2'>
                    <button className='primary-button'>
                        <p>Name: Jane Smith</p>
                        
                        <p>Estimated time of arrival: 6 min</p>
                        <p>Vehicle: SUV</p>
                        <p>Ride Fare: $55.0</p>
                        <p>Rating: 4.8</p>
                       
                    </button>
                    </Link>
                </div>
                <div className="driver-list" onClick={() => confirmRide({ name: 'Donald Trump', phoneNumber: '9177568000', estimatedTime: '5 min', vehicle: 'Auto', fare: '$45.0', rating: '4.5', email: 'Donald@gmail.com' })}>
                <Link to='/DriverDetails'>
                    <button className='primary-button'>
                    <p>Name: Donald Trump</p>
                    
                    <p>Estimated time of arrival: 5 min</p>
                    <p>Vehicle: Auto</p>
                    <p>Ride Fare: $45.0</p>
                    <p>Rating: 4.5</p>
                    
                    </button>
                    </Link>
                </div>
                <div className="driver-list" onClick={() => confirmRide({ name: 'Emily Johnson', phoneNumber: '9177568003', estimatedTime: '8 min', vehicle: 'Hatchback', fare: '$40.0', rating: '4.5', email: 'EmilyJohnson@gmail.com' })}>
                <Link to='/DriverDetails3'>
                    <button className='primary-button'>
                    <p>Name: Emily Johnson</p>
                    
                    <p>Estimated time of arrival: 8 min</p>
                    <p>Vehicle: Hatchback</p>
                    <p>Ride Fare: $40.0</p>
                    <p>Rating: 4.5</p>
                    
                    </button>
                    </Link>
                </div>
                <div className="driver-list" onClick={() => confirmRide({ name: 'William Brown', phoneNumber: '9177568004', estimatedTime: '10 min', vehicle: 'Mini', fare: '$35.0', rating: '4.6', email: 'WilliamBrown@gmail.com' })}>
                <Link to='/DriverDetails4'>
                    <button className='primary-button'>
                    <p>Name: William Brown</p>
                    
                    <p>Estimated time of arrival: 10 min</p>
                    <p>Vehicle: Mini</p>
                    <p>Ride Fare: $35.0</p>
                    <p>Rating: 4.6</p>
                    
                    </button>
                    </Link>
                </div>
                <div className="driver-list" onClick={() => confirmRide({ name: 'Olivia Wilson', phoneNumber: '9177568005', estimatedTime: '9 min', vehicle: 'Luxury', fare: '$60.0', rating: '4.9', email: 'OliviaWilson@gmail.com' })}>
                <Link to='/DriverDetails5'>
                    <button className='primary-button'>
                    <p>Name: Olivia Wilson</p>
                    <p>Estimated time of arrival: 9 min</p>
                    <p>Vehicle: Luxury</p>
                    <p>Ride Fare: $60.0</p>
                    <p>Rating: 4.9</p>
                    </button>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default DriverList;
