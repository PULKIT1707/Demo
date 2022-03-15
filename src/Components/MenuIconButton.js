import { Button  } from '@mui/material'
import '../css/style.css'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import MenuOptions from '../data/MenuOptions.json'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#32a893'),
  backgroundColor: '#32a893',
  borderColor: 'none',
  borderRadius: "0px",
  '&:hover': {
    backgroundColor: '#32a893',
    borderColor: 'none',
  },
}));

const MenuIconButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='menuButtonBar'>
      {
        MenuOptions.map((cur) => {
          return (
            <>
            {/* <Tooltip title={cur.name}> */}
              <ColorButton variant="outlined">
                <i class={cur.icon} style={{"display": "flex", "color": "white", "flexDirection": "column", "alignItems": "center", "paddingTop" : "10px"}}>
                  <span className='iconButton'>{cur.name}</span>
                </i>
              </ColorButton> 
            </>      
          )
        })
      }
   </div>
  )
}

export default MenuIconButton