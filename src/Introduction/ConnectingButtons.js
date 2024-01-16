
import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useNavigate } from 'react-router-dom';

const ConnectingButtons = () => {
    const navigate = useNavigate();

    const pushToJoinRoomPage = () => {
        navigate('/join-room');
    }

    const pushToJoinRoomPageAsHost = () => {
        navigate('join-room?host=true');
    }

    return (
        <div className="connecting_buttons_container">
            <ConnectingButton buttonText="Entrar em uma reunião" onClickHandler={pushToJoinRoomPage}/>
            <ConnectingButton buttonText="Criar uma reunião" createRoomButton onClickHandler={pushToJoinRoomPageAsHost}/>
        </div>
    );
}

export default ConnectingButtons;