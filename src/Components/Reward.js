import React from 'react';
import '../css/style.css';
import rewardPic from '../images/reward-pic.jpg';
import Rewards from '../data/Reward.json'

const Reward = () => {
  return (
        <>
            {
                Rewards.map((cur) => {
                   return  <div className="rewardBlock1">
                                <div className="rewardDescription">
                                    <div className="rewardDescriptionHeader">
                                        <p>{cur.header}</p>
                                    </div>
                                    <div className="rewardDescriptionSubHeader">
                                        <p>{cur.subHeader}</p>
                                    </div>
                                    <hr/>
                                    <div className="rewardDescriptionContent">
                                        <p>{cur.content}</p>
                                    </div>
                                </div>
                                <img className="rewardPicture" src={rewardPic} alt="" />
                            </div>
                })
            }
            
        </>
  )
}

export default Reward