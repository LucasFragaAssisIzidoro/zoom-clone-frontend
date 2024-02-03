import React, { useState }from "react";
import { connect } from "react-redux";
import { useNavigate} from "react-router-dom";
import JoinRoomInputs from "./JoinRoomInputs";
import { setConnectOnlyWithAudio, setIdentity, setRoomId } from "../store/actions";
import OnlyWithAudioCheckBox from "./OnlyWithAudioCheckBox";
import RoomNotFoundMessage from "./RoomNotFoundMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import {v4 as uuidv4} from 'uuid';
import { checkIfRoomExists } from "../utils/twilioUtils";

const JoinRoomContent = (props) => {
    const {isRoomHost, setConnectOnlyWithAudioAction, connectOnlyWithAudio, setRoomIdAction, setIdentityAction} = props;
    const [roomIdValue, setRoomIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);
    const navigate = useNavigate();
    const handleJoinToRoom = async () => {
        setIdentityAction(nameValue);
        if(!isRoomHost){
            const roomExists = await checkIfRoomExists(roomIdValue);
            if(roomExists){
                setRoomId(roomIdValue);
                navigate('/room');
            }else{
                setShowRoomNotFoundMessage(true);
            }
        }else{
            setRoomIdAction(uuidv4());
            navigate('/room')
        }
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
                handleJoinToRoom={handleJoinToRoom}
            />
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setConnectOnlyWithAudioAction: (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
        setIdentityAction: (identity) => dispatch(setIdentity(identity)),
        setRoomIdAction: (id) => dispatch(setRoomId(id))

    };
};

const mapStoreStateToProps = (state) => {
    return {
        ...state
    };
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomContent);