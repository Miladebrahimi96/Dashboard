import React from 'react';
import "./Widget.scss";

//Icons
import { KeyboardArrowUp, PersonOutlined, ShoppingCartOutlined, MonetizationOnOutlined, AccountBalanceWalletOutlined } from '@mui/icons-material';

const Widget = ({type}) => {

    //temporary
    const amount = 100;
    const diff = 20;

    let data;

    switch(type) {
        case "user":
            data ={
                title: "USERS",
                isMoney: false,
                link: "See All Users",
                icon: <PersonOutlined 
                    className='icon'
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, .2)"
                    }}
                />
            }
            break;
        case "order":
            data ={
                title: "ORDERS",
                isMoney: false,
                link: "View All Orders",
                icon: <ShoppingCartOutlined 
                    className='icon'
                    style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218, 165, 32, .2)"
                    }}
                />
            }
            break;
        case "earning":
            data ={
                title: "EARNINGS",
                isMoney: true,
                link: "View Net Earnings",
                icon: <MonetizationOnOutlined 
                    className='icon'
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0,128, 0, .2)"
                    }}
                />
            }
            break;
        case "balance":
            data ={
                title: "BALANCE",
                isMoney: true,
                link: "See Details",
                icon: <AccountBalanceWalletOutlined 
                    className='icon'
                    style={{
                        color: "purple",
                        backgroundColor: "rgba(128, 0, 128, .2)"
                    }}
                />
            }
            break;
        default:
            break;
            
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;