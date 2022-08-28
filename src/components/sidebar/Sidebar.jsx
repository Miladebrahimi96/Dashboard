import React, { useContext } from 'react';
import "./Sidebar.scss";
import { Link } from "react-router-dom";

//ICONS
import {Dashboard, PersonOutline, Inventory2Outlined, TocOutlined, ShowChartOutlined, Notifications, HealthAndSafety, PsychologyOutlined, SettingsOutlined, AccountCircleOutlined, LogoutOutlined, LocalShippingOutlined} from '@mui/icons-material';

//Context
import { DarkContext } from '../../context/DarkModeContext';

const Sidebar = () => {

    const { setDark } = useContext(DarkContext);

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/'>
                    <span className="logo">MiladAdmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Dashboard className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <Link to='/users'>
                    <li>
                        <PersonOutline className='icon'/>
                            <span>Users</span>
                    </li>
                    </Link>
                    <Link to='/products'>
                        <li>
                            <Inventory2Outlined className='icon'/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <TocOutlined className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlined className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <ShowChartOutlined className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <Notifications className='icon'/>
                        <span>Notfications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <HealthAndSafety className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlined className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlined className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlined className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlined className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div onClick={() => setDark(false)} className="colorOption"></div>
                <div onClick={() => setDark(true)}className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;