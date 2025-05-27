import React  from "react";
import'./Sidebar.css'; 
import { assets } from "../../assets/assets";// Assuming you have a CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <img  className= " menu"src={assets.menu_icon} alt="" />
                <img className="plus" src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent"></div>
            <p className="recent-titile">Recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is react ...</p>
            </div>
            <div className="bottom">
                <div className="botton-item recent-titile">
                    <img src={assets.question_icon} alt="" />
                    <p>Help</p>
                </div>
                <div className="botton-item recent-titile">
                    <img src={assets.history_icon} alt="" />
                    <p>Activity</p>
                </div>
                <div className="botton-item recent-titile">
                    <img src={assets.setting_icon} alt="" />
                    <p>Setting</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;