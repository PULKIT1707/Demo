import { Button } from '@mui/material';
import React from 'react';
import '../css/style.css';
import logo from '../images/myreward_logo.png';
import SearchField from "react-search-field";
import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    borderRadius: "0px",
    '&:hover': {
      backgroundColor: teal[400],
      borderColor: teal[400],
    },
  }));

  const ColorButtonBorder = styled(Button)(({ theme }) => ({
    color: 'black',
    borderColor: teal[500],
    borderRadius: "0px",
    '&:hover': {
      backgroundColor: teal[700],
      color: 'white'
    },
  }));


const Navbar = () => {

  const signInButtonClick = () => {
    
  }


  return (
    <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
            <div class="nav-title">
            <img src={logo} alt="My Rewards" style={{"height": "50px"}} />
            </div>
        </div>
        <div class="nav-btn">
            <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
        
        <div class="nav-links">
            <SearchField
                placeholder="Type your Search here..."
                searchText=""
                className="searchBar"
            />
            <div className="navButtons">
                <ColorButton className="navButton" variant="contained" >SIGN UP FOR FREE</ColorButton>
                <ColorButtonBorder id='signInButtonId' className="navButton" variant="outlined" onClick={signInButtonClick}>SIGN IN</ColorButtonBorder>
            </div>
        </div>
    </div>
  )
}

export default Navbar