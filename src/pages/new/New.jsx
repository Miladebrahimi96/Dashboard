import React, { useState } from 'react';
import './New.scss';

//Components
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

//Icons
import { DriveFolderUploadOutlined } from '@mui/icons-material';

//images
import noImage from "../../images/no-image.jpg";

const New = ({title, inputs}) => {

    const [file, setFile] = useState("");

    const fileHandler = e => {
        setFile(e.target.files[0])
    }

    console.log(file);

    return (
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : noImage} alt="no-img" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor='file'>Image: <DriveFolderUploadOutlined className='icon'/></label>
                                <input type="file" id='file' style={{display:"none"}} onChange={fileHandler}/>
                            </div>
                            {
                                inputs.map(input => (
                                    <div key={input.id} className="formInput">
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder}/>
                                    </div>
                                ))
                            }
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;