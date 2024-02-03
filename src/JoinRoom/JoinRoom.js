import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import { useLocation} from "react-router-dom";
import JoinRoomTittle from "./JoinRoomTittle";
import JoinRoomContent from "./JoinRoomContent"
import LoadingOverlay from "./LoadingOverlay";

import "./JoinRoom.css"


const JoinRoom = (props) => {

    const {setIsRoomHostAction, isRoomHost} = props;

    const search = useLocation().search;

    useEffect(()=>{
        const isRoomHost = new URLSearchParams(search).get('host');
        if(isRoomHost){
            setIsRoomHostAction(true)
        }
    }, []);

    const [showLoadingOverlay, setShowLoadingOverlay] = useState(false)  

    return (
        <div className="join_room_page_container">
            <div className="join_room_page_panel">
                <JoinRoomTittle isRoomHost={isRoomHost} />
                <JoinRoomContent 
                    isRoomHost={isRoomHost} 
                    setShowLoadingOverlay={setShowLoadingOverlay}
                />
                {showLoadingOverlay && <LoadingOverlay />}
            </div>
        </div>
    );
};

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost))
    };
};


export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoom);
