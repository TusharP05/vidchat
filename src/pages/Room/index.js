import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () =>{
    const {roomId} = useParams();
    const myMeeting= async(element) =>{
       const appID= 1482766618;
       const serverSecret= "a974719b2ab8ccacdb3781b5273fe805";
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