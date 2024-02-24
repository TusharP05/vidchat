import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () =>{
    const {roomId} = useParams();
    const myMeeting= async(element) =>{
       const appID= 815651400;
    //    1482766618;
       const serverSecret= "4e273a2cd103faddda17374d67a12400";
    //    "a974719b2ab8ccacdb3781b5273fe805";
       const kitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Tushar");
       const zc=ZegoUIKitPrebuilt.create(kitToken);
       await zc.joinRoom({
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