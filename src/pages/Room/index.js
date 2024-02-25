import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () =>{
    const {roomId} = useParams();
    const myMeeting= async(element) =>{
       const appID= 726367056;
       const serverSecret= "e312a46b401a18d4fb54de36834f9840";
       const kitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Tushar");
       const zc=ZegoUIKitPrebuilt.create(kitToken);
       zc.joinRoom({
        container:element,
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        
       });
    }
    return (
       
        <div>
            <div ref={myMeeting}/>
        </div>
    );
};
export default RoomPage;