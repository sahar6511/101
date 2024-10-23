
import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import SearchIcon from '../Icons/SearchIcon'
import '../../styles/main.scss'

const SearchPannel = () => {
  return (
    <div className='search-panel container-custom fadeInUp'>
      <SearchIcon></SearchIcon>
      <Input  placeholder="متن مورد جستجو"></Input>
    </div>
  )
}

export default SearchPannel