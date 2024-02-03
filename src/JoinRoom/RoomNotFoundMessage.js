import React from 'react';

const RoomNotFoundMessage = ({showRoomNotFoundMessage}) => {
    return (
        <div className='room_not_found_container'>
            {showRoomNotFoundMessage && (
                <p className='room_not_found_paragraph'> A sala não foi encontrada, por favor tente novamente</p>
            )}
        </div>
    );
};

export default RoomNotFoundMessage;