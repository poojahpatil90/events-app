import React from "react";
import Event from "./Event";
import { eventData } from "./eventData";
import Typography from "@material-ui/core/Typography";
import "./EventManager.css";

function EventManager() {
  return (
    <div className="eventManager">
      {eventData.map((manager, index) => {
        return (
          <div key={index} className="eventManager__category">
            <Typography gutterBottom variant="h5" component="h5">
              {manager.category}
            </Typography>
            <div className="eventManager__events">
              {manager.events.map((event, i) => {
                return <Event key={i} event={event} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EventManager;
