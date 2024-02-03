import React, { useState }from "react";
import { connect } from "react-redux";
import JoinRoomInputs from "./JoinRoomInputs";
import { setConnectOnlyWithAudio } from "../store/actions";
import OnlyWithAudioCheckBox from "./OnlyWithAudioCheckBox";
import RoomNotFoundMessage from "./RoomNotFoundMessage";
import JoinRoomButtons from "./JoinRoomButtons";

const JoinRoomContent = (props) => {
    const {isRoomHost, setConnectOnlyWithAudioAction, connectOnlyWithAudio} = props;
    const [roomIdValue, setRoomIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);
    const handleJoinToRoomm = () => {
        //soon
    }

    return (
        <>
            <JoinRoomInputs 
            roomIdValue={roomIdValue} 
            setRoomIdValue={setRoomIdValue} 
            nameValue={nameValue} 
            setNameValue={setNameValue} 
            isRoomHost={isRoomHost}/>

            <OnlyWithAudioCheckBox
                setConnectOnlyWithAudio={setConnectOnlyWithAudioAction}
                connectOnlyWithAudio={connectOnlyWithAudio}/>
            
            <RoomNotFoundMessage showRoomNotFoundMessage={showRoomNotFoundMessage}/>

            <JoinRoomButtons 
                isRoomHost={isRoomHost}
                handleJoinToRoom
            />
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setConnectOnlyWithAudioAction: (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio)),

    };
};

const mapStoreStateToProps = (state) => {
    return {
        ...state
    };
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomContent);