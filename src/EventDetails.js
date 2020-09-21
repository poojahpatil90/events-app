import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { eventData } from "./eventData";
import "./EventDetails.css";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
import ShareEvent from "./ShareEvent";

function fetchEvent(id) {
  let eventObj = {};
  for (let eventManager of eventData) {
    eventObj = eventManager.events.find((event) => id === event.id);
    if (eventObj && Object.keys(eventObj).length > 0) {
      break;
    }
  }
  return eventObj;
}

function EventDetails() {
  let { eventId } = useParams();
  const event = fetchEvent(eventId);
  const [applied, setApplied] = useState(false);
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const applyHandler = () => {
    if (!event.premium) {
      setApplied(true);
      setSuccessOpen(true);
    } else {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
  };

  const handleShareClose = (event) => {
    setShareOpen(false);
  };

  return (
    <>
      <Paper className="margin20">
        <header className="eventDetails__header">
          <CardMedia component="img" alt="" height="250" image={event.image} />
          {event.premium && <div className="premiumTag">Premium</div>}
        </header>

        <main className="margin20">
          <Typography gutterBottom variant="h5" component="h2">
            {event.title}
          </Typography>
          <div className="divideSpace">
            <div>
              <Typography gutterBottom variant="body2" component="p">
                <span className="fontBold">Participants</span>
                <br />
                {event.details.participants} people
              </Typography>

              <Typography gutterBottom variant="body2" component="p">
                <span className="fontBold">Location</span>
                <br />
                {event.location}
              </Typography>

              <Typography variant="body2" gutterBottom component="p">
                <span className="fontBold">Host</span>
                <br />
                {event.details.host}
              </Typography>
            </div>

            <div>
              <Typography variant="body2" gutterBottom component="p">
                <span className="fontBold">Deadline</span>
                <br />
                {event.deadline}
              </Typography>

              <Typography variant="body2" gutterBottom component="p">
                <span className="fontBold">Event Dates</span>
                <br />
                {event.eventDate}
              </Typography>
            </div>
          </div>
          <Typography
            variant="body1"
            gutterBottom
            component="p"
            className="marginTop20"
          >
            {event.details.description}
          </Typography>
        </main>

        <footer className="footerStyle divideSpace">
          <Button
            size="small"
            color="primary"
            onClick={(e) => setShareOpen(true)}
          >
            Share
          </Button>
          {!applied ? (
            <Button
              onClick={applyHandler}
              className="actionButton"
              variant="contained"
              size="small"
              color="primary"
            >
              Register
            </Button>
          ) : (
            <Typography
              className="actionButton"
              variant="overline"
              component="p"
              color="primary"
            >
              Registered
            </Typography>
          )}
        </footer>

        <AlertError open={open} handleClose={handleClose} />

        <AlertSuccess
          successOpen={successOpen}
          handleSuccessClose={handleSuccessClose}
          title={event.title}
        />

        <ShareEvent
          shareOpen={shareOpen}
          handleShareClose={handleShareClose}
          event={event}
        />
      </Paper>
    </>
  );
}

export default EventDetails;
