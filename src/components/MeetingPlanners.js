import React from "react";
import Meeting_planners from '../assets/videos/meeting_planners.mp4'

function MeetingPlanners(){

    return(
        <div className="meeting_planners">
            <video src={Meeting_planners} autoPlay loop muted></video>            
        </div>
    )
}

export default MeetingPlanners;