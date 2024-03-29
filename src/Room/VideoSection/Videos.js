import React , {useEffect}from "react";
import { connect } from "react-redux";
import RoomLabel from "./RoomLabel";
import TwilioRoom from "./TwilioRoom/TwilioRoom";
import { connectToRoom } from "../../utils/twilioUtils";

const Videos = ({ room, setRoom, roomId, twilioAccessToken }) => {

  useEffect(()=>{
    if(twilioAccessToken){
      connectToRoom(twilioAccessToken, roomId, setRoom)
    }
  }, [twilioAccessToken]);
  return (
    <div className="videos_container">
      <RoomLabel roomId={roomId} />
      {room && <TwilioRoom room={room} />}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(Videos);