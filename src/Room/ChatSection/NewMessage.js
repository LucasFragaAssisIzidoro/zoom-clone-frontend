import React, {useState} from "react";
import SendMessagButton from '../../resources/images/sendMessageButton.svg';

const NewMessage = () => {
    const[message, setMessage] = useState("");

    const sendMessage = () => {
        console.log(message);
        setMessage('');
    }
    const handleKeyPressed = (event) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            //send message
            sendMessage();
        }
    }

    const handleTextChange = (event) => {
        setMessage(event.target.value);
    }
    return (
        <div className="new_message_container">
            <input 
                className="new_message_input"
                value ={message}
                onChange={handleTextChange}
                placeholder="Escreva..."
                type="text"
                onKeyDown={handleKeyPressed}
            />
            <img
                className="new_message_button"
                src={SendMessagButton}
                onClick={sendMessage}
            />
        </div>
    );
};

export default NewMessage;