import { useParams } from "react-router-dom";

import { useCallback, useState } from "react";
import events from "../events.json"
function EventDetails() {

    const { name  } = useParams();
    const event = events.find(event => event.name === name);
    console.log(name)
  
  
    console.log(name.description)
    return ( 
        <div>
      
      <img src={`../public/images/${event.img}`} height="150px" />
        <h1>{name}</h1>
 
        <p>Description: {event.description}</p>
        {/* Add other details of the event here */}
      </div>
     );
}

export default EventDetails;