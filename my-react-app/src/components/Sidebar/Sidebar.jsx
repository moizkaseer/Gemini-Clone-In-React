import React from "react";
import { useState } from "react";
import './Sidebar.css';
import { assets } from "../../assets/assets";// Assuming you have a CSS file for styling

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    
    return (
        <div className={`sidebar ${extended ? 'expanded' : ''}`}>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img className="plus" src={assets.plus_icon} alt="" />
                    {extended && <p>New Chat</p>}
                </div>
            </div>
            <div className="recent">
                {extended && <p className="recent-title">Recent</p>}
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    {extended && <p>What is react ...</p>}
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-item">
                    <img src={assets.question_icon} alt="" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-item">
                    <img src={assets.history_icon} alt="" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="bottom-item">
                    <img src={assets.setting_icon} alt="" />
                    {extended && <p>Setting</p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;