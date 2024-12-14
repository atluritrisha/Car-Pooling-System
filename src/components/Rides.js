
import React, { useState } from 'react';
import BannerBackground from '../assets/dtbackg.png';
import DriverDetails from "./DriverDetails"
import DriverList from './DriverList';
import { Link } from 'react-router-dom';
function OfferRide() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  const handleOfferRide = () => {
    console.log('Offering a ride:', { origin, destination, departureTime });
  };

  return (
    <div className="home-container">
      <div className='ride-bannerImage-container'>
                    <img src={BannerBackground} alt='Copenhagen, Denmark'/>
                </div>
    <div className="offer-ride-container">
      <h2>Find a Ride</h2>
      <form>
        <br />
        <label>
          Origin:
          <br></br>
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value) } />
        </label>
        <br />
        <label>
          Destination:
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </label>
        <br />
        <label>
          Departure Time:
          <input type="datetime-local" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
        </label>
        <br />
        <Link to="/DriverList">
        <button type="button" onClick={handleOfferRide}>
          Find Ride
        </button>
        </Link>
      </form>
    </div>
    </div>
  );
}

export default OfferRide;
