import React from 'react'
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectFilled, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large'/>
                <Typography.Titl level={2} className='logo'> 
                    <Link to='/'>Cryptoverse</Link>
                </Typography.Titl
            </div>
        </div>
    )
}

export default Navbar
