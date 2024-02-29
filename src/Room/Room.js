import React, {useEffect} from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import { connect } from "react-redux";
import { setTwilioAccessToken, showOverlay } from "../store/actions";
import { getTokenFromTwilio } from "../utils/twilioUtils";
import Overlay from "./Overlay";

import "./Room.css"


const Room = (props) => {

    const {identity, setTwilioAccessTokenAction, showOverlay} = props;

    useEffect(()=>{
        getTokenFromTwilio(setTwilioAccessTokenAction, identity);
    }, []);


    return (
    <div className="room_container">
        <ParticipantsSection />
        <VideoSection /> 
        <ChatSection />
        {showOverlay && <Overlay/> }
    </div>
    );
};

const mapStoreStateToProps = (state) => {
    return {
        ...state, 
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        setTwilioAccessTokenAction : (token) => dispatch(setTwilioAccessToken(token))
    };
};
export default connect(mapStoreStateToProps, mapActionsToProps)(Room);
