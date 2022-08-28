import React, { useContext } from 'react';
import "./Navbar.scss";

//Icons
import {SearchOutlined, LanguageOutlined, DarkModeOutlined, FullscreenExitOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined, ListOutlined} from '@mui/icons-material';

//Images
import avatar from "../../images/avatar.jpg";

//Contexts
import { DarkContext } from '../../context/DarkModeContext';

const Navbar = () => {

    const {dark, setDark} = useContext(DarkContext);

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...'/>
                    <SearchOutlined/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className='icon'/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlined onClick={() => setDark(dark => !dark)} className='icon'/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className='icon'/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlined className='icon'/>
                    </div>
                    <div className="item">
                        <img src={avatar} alt="profile" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;