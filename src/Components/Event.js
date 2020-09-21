import React, { useState } from "react";
import "./Event.css";
import { useHistory } from "react-router-dom";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
import ShareEvent from "./ShareEvent";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Paper from "@material-ui/core/Paper";
import HighlightIcon from "@material-ui/icons/Highlight";

function Event({ event }) {
  const history = useHistory();
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
    <div className="event">
      <Card className="root">
        <CardActionArea>
          <div>
            <CardMedia
              component="img"
              alt=""
              height="150"
              image={event.image}
            />
            {event.premium && <div className="premiumStyle">Premium</div>}
            {event.special && (
              <HighlightIcon className="premiumStyle" style={{ left: "93%" }} />
            )}
          </div>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {event.title}
            </Typography>
            <div className="displayFlex justifyContent">
              <div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="marginTen"
                  component="p"
                  gutterBottom
                >
                  <span className="displayFlex">
                    <LocationOnIcon className="locationStyle" />
                    {event.location}
                  </span>
                </Typography>
                <Typography
                  className="marginTen"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  <span className="fontBold">Deadline:&nbsp;</span>
                  {event.deadline}
                </Typography>

                <Typography
                  className="marginTen"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  <span className="fontBold">Host:&nbsp;</span>
                  {event.details.host}
                </Typography>
              </div>

              <div className="eventDateWrapper">
                <Paper variant="outlined" square>
                  <Typography
                    variant="caption"
                    color="textPrimary"
                    component="p"
                    className="eventDates"
                  >
                    <span className="fontBold">Event Dates:</span>
                    <br />
                    {event.eventDate}
                  </Typography>
                </Paper>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className="displayFlex justifyContent eventDetails__footer">
          <div>
            <Button
              size="small"
              color="primary"
              onClick={(e) => history.push(`/event/${event.id}`)}
            >
              Learn More
            </Button>
            <Button
              color="primary"
              size="small"
              onClick={(e) => setShareOpen(true)}
            >
              Share
            </Button>
          </div>
          <div>
            {!applied ? (
              <Button
                onClick={applyHandler}
                variant="contained"
                size="small"
                color="primary"
              >
                Register
              </Button>
            ) : (
              <Typography variant="overline" component="p" color="primary">
                Registered
              </Typography>
            )}
          </div>
        </CardActions>

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
      </Card>
    </div>
  );
}

export default Event;
