import { Button } from '@mui/material';
import React from 'react';
import '../css/style.css';
import rewardPic from '../images/reward-pic.jpg'
import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import Works from '../data/Work.json'

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    borderRadius: "0px",
    '&:hover': {
      backgroundColor: teal[700],
    },
  }));

const Work = () => {
  return (
    <>
    {
        Works.map((cur) => {
            return <div className="rewardBlock1">
            <img className="rewardPicture" src={rewardPic} alt="" />
            <div className="rewardDescription">
                <div className="rewardDescriptionHeader">
                    <p>{cur.header}</p>
                </div>
                <div className="rewardDescriptionSubHeader">
                    <p>{cur.subHeader}</p>
                </div>
                <hr/>
                <div className="rewardDescriptionContent">
                    <p>{cur.content1}</p>              
                    <p>{cur.content2}</p>
                </div>
                <ColorButton variant="contained" >SIGN UP FOR FREE</ColorButton>
            </div>
            </div>
        })
    }
    </>
  )
}

export default Work