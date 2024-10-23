import React from 'react'
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Space from "../../components/Space/Space";
import ScrollButton from "../ScrollButton/ScrollButton ";
import "../../styles/main.scss";
import { Link ,Outlet} from 'react-router-dom';
import Divider from '../Divider/Divider';
import {  } from 'react-router-dom';
const ManagerPannel = () => {
  return (
    <div className="manager-pannel">
    <TopMenu />
    <Header />
    <Space />
    <Space />
    <Space />
    <Space /> 
    <div className='container-custom  manager-pannel__menu box-shadow'>
      
      <ul>
        <li>
          <Link to="showallrooms">نمایش اتاق ها</Link>
          </li>
          <li>

          <Link to="">  ویرایش اتاق ها </Link>
          </li>
          <li>

          <Link to="">نمایش کاربران </Link>
          </li>
          
          <li>

          <Link to="">ویرایش کاربران</Link>
         
        </li>

      </ul>

    {<Outlet />}
    </div>
      







    <Space />

<Footer />
<ScrollButton/>
    </div>
  )
}

export default ManagerPannel