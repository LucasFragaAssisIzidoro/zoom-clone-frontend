import React from "react";
import logo from '../resources/images/logo.png';
import ConnectingButtons from "./ConnectingButtons";
import './Introduction.css';

const Introduction = () => {
    return  (
        <div className="introduction_page_container">
            <div className="introduction_page_panel">
                <img src={logo} className="introduction_page_image"/>
                <ConnectingButtons />
            </div>
        </div>);
}

export default Introduction;



