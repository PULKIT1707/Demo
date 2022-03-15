import { Button } from '@mui/material';
import React from 'react';
import '../css/style.css';
import rewardPic from '../images/reward-pic.jpg'
import Deal from '../data/Deals.json'

const Deals = () => {
  return (
    <>
    {
        Deal.map((cur) => {
            return  <div className="rewardBlock1"> 
            <img className="rewardPicture" src={rewardPic} alt="" />
            <div className="rewardDescription">
                <div className="rewardDescriptionSubHeader">
                    <p>{cur.subHeader}</p>
                </div>
                <hr/>
                <div className="rewardDescriptionContent">
                    <p>{cur.content}</p>
                </div>
            </div>
        </div>
        })
    }
    </>
  )
}

export default Deals