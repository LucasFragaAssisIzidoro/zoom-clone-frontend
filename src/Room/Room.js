import React from "react";
import "./Room.css"
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";

const Room = () => {
    return (
    <div className="room_container">
        <ParticipantsSection />
        <VideoSection /> 
        <ChatSection />
    </div>
    );

};

export default Room;
