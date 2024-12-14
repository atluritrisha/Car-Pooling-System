import React, { useState } from 'react';
import user_icon from "@mui/icons-material/AccountCircle";
import BannerBackground from '../assets/dtbackg.png';
import email_icon from '@mui/icons-material/Email';
import password_icon from '@mui/icons-material/Password';

const Signup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    
    <div className='container'>
      <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt='Copenhagen, Denmark'/>
                </div>
      <div className='header1'>
        <div className='text'>
          {action}
        </div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>: <div className='input'>
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}

        <div className='input'>
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' />
        </div>̀
        <div className='input'>
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click here!</span></div>}
      
      <div className='submit-container'>
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default Signup;
