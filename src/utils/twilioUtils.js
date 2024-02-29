import axios from 'axios';
import {v4 as uuidv4} from 'uuid'
import { setRoomId, setShowOverlay } from '../store/actions';
import {store} from '../store/store';
import {
    connect,
    LocalAudioTrack,
    LocalVideoTrack,
} from 'twilio-video';

const audioConstraints = {
    video: false,
    audio: true
}
const videoConstraints = {
    audio: true,
    video:{
        width:640,
        height:480
    }
}

export const getTokenFromTwilio = async(setAcessToken, identity) => {
    const randomId = uuidv4();

    console.log(identity);

    const response = await axios.get(`https://zoom-clone-service-4393-dev.twil.io/token-service?identity=${randomId}${identity}`);

    const data = response.data;

    if(data.accessToken){
        setAcessToken(data.accessToken)
    };
};

export const connectToRoom = async(accessToken, roomId  = 'test-room', setRoom) => {
    const onlyWithAudio = store.getState().connectOnlyWithAudio;
    const constraints = onlyWithAudio ? audioConstraints : videoConstraints;
    navigator.mediaDevices.getUserMedia(constraints).then(async (stream)=>{
        let tracks;
        const audioTrack = new LocalAudioTrack(stream.getAudioTracks()[0]);

        let videoTrack;

        if(!onlyWithAudio) {
            videoTrack = new LocalVideoTrack(stream.getVideoTracks()[0]);
            tracks = [audioTrack, videoTrack];
        } else {
            tracks = [audioTrack];
        }

        const room = await connect(accessToken, {
            name: roomId,
            tracks,
        });
        console.log('conectado com sucesso')
        console.log(room);
        setRoom(room);
        store.dispatch(setShowOverlay(false));


    }).catch((err) => {
        console.log(err)
    })
};

export const checkIfRoomExists = async (roomId) => {
    const response = await axios.get(
        `https://zoom-clone-service-4393-dev.twil.io/room-exists?roomId=${roomId}`
    );
    return response.data.roomExists;
};


