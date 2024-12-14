import React,{useState} from 'react';
import logo from '../assets/dtlogo.png';
import {BsCart2} from 'react-icons/bs';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from 'react-router-dom';


export const Navbar = () => {

    const[openMenu,setOpenMenu]=useState(false);
    const menuOptions =[
        {
            text:"Home",
            icon:<HomeIcon/>,
        },
        {
            text:"Rides",
            icon:<DirectionsCar/>,
        },
        {
            text:"Login/SignUp",
            icon:<AccountCircle/>,
        },
    ];

  return <nav>
    <div className='nav-logo-container'>
    <Link to="/"> <img src={logo} alt="Logo" /></Link>
    </div>
    <div className='navbar-links-container'>
        <Link to="/">Home</Link>
        <Link to="/Rides">Rides</Link>
        <Link to="/Login">
            <Link to='/Feedback'>Feedback</Link>
        <button className='primary1-button'>Login/SignUp</button>
        </Link>
    </div>
    <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open ={openMenu} onClose={()=> setOpenMenu(false)}
    anchor='right' >
        <Box 
        sx={{width:250}}
        role="presentation"
        onClick={()=>setOpenMenu(false)}
        onKeyDown={()=>setOpenMenu(false)}
        >
            <List>
                {menuOptions.map((item)=>(
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.icon}/>
                        </ListItemButton>

                    </ListItem>
                ))}
            </List>
        </Box>
        </Drawer>
  </nav>
}
export default Navbar