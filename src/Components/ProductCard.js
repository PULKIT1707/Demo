import { ButtonBase } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ProductCard = (props) => {
  const [src, ] = useState(props.src);
  const [title, ] = useState(props.title);
  const [description, ] = useState(props.description);
  const [content, ] = useState(props.content);
  const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
    
  // };

  // const handleClose = () => {
    
  // };

  const Desc = () => {
    if(description !== ""){
      return (<p className="productText">{description}</p>)
    }else if(description === ""){
      return ;
    }
  }

  // useEffect(() => {  
  //   return () => {
  //     setOpen(true);
  //   }
  // }, [openButtonClick])
  
  const openButtonClick = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  const closeButtonClick = () => {
    setOpen(false);
  }
  return (
    <ButtonBase onClick={openButtonClick}>
    <div id = "displyPanel" className="productCard">
      <img src={src} alt="" />
      <div className="productInfo">
          <div className="productName">
              <p>{title}</p>
              {
                props.description ? <span><i class="fa-regular fa-heart"></i></span>: ''
              }
              
          </div>
          <Desc/>
      </div>
      <Dialog
        open={open}
        onClose={closeButtonClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeButtonClick} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
  </div>
  </ButtonBase>
  )
}

export default ProductCard