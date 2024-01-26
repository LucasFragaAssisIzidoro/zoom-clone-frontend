import React from "react";

const JoinRoomTittle = ({isRoomHost}) => {
    const tiitlText = isRoomHost ? "Criando reunião" : "Entrando na reunião";
    return (
        <p className="join_room_title">
            {tiitlText}
        </p>
    );
};

export default JoinRoomTittle;