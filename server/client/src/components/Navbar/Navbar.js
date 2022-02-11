import React, { useState, useEffect } from 'react';
import {  Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import "./NavBar.css";
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import { FaWrench , FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
     <nav className='navbar'>
     <div className='navbar-container'>
     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MechProjects
          <FaWrench/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? (<FaTimes color='white'/>) : (<FaBars color='white'/>)} 
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/posts' className='nav-links' onClick={closeMobileMenu}>
              Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
         
        </li>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} style ={{backgroundColor:"#c721dd", color: "#f4f4f4"}} onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" onClick={closeMobileMenu} variant="contained" style ={{backgroundColor:"#c721dd", color: "#f4f4f4"}}>Sign In</Button>
        )}
      </Toolbar>
      </ul>
      </div>
      </nav>
      </>
  );
};

export default Navbar;
