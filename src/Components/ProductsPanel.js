import { Button } from '@mui/material'
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import products from '../data/Products.json'
import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const ColorButtonBorder = styled(Button)(({ theme }) => ({
  color: 'black',
  borderColor: teal[500],
  borderRadius: "0px",
  '&:hover': {
    backgroundColor: teal[700],
    color: 'white'
  },
}));

const ProductsPanel = (props) => {

  const [type, setType] = useState(props.type);

  const checkType = () => {
    if( type === "display"){

    } else if( type === "fav"){
      
    }
  }

  return (
    <div className="ProductPanel">
        <div className="productHeader">
            <p className="paraHeader">{props.title}</p>
            <ColorButtonBorder variant="outlined">VIEW ALL</ColorButtonBorder>
        </div>
        
        {
          props.type === "display"?
        <div className="productPanelContent">
          {
            products.map((cur) => {
              return <ProductCard title={cur.name} src={cur.src}/>
            }
            )
          }
        </div>
        :
        <div className="productPanelContent">
          {
            products.map((cur) => {
              return <ProductCard title={cur.name} src={cur.src} description={cur.description} content={cur.content} />
            }
            )
          }
        </div>
}
    </div>
  )
}

export default ProductsPanel