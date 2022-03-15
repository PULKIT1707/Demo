import React from 'react'
import Select from 'react-select';
import options from '../data/Options.json'
import MenuIconButton from './MenuIconButton';

const Menu = () => {
  return (
    <div className='menuBar'>
        <Select
        options={options}
      />
      <p className='menuParagraph'>Popular Categories</p>
      <MenuIconButton/>
      <p className='menuParagraph'>Explore All Brands</p>
    </div>
  )
}

export default Menu