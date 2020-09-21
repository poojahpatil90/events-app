import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  shareIcons: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
}));

function ShareEvent({ shareOpen, handleShareClose, event }) {
  const classes = useStyles();

  let url =
    window.location.pathname.length > 1
      ? window.location.href
      : window.location.href + `events/${event.id}`;

  const [shareObj, setShareObj] = useState({
    url: url,
    title: event.title,
    hashtag: "#vanhackevent",
  });

  return (
    <div>
      <Modal
        className={classes.modal}
        open={shareOpen}
        onClose={handleShareClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={shareOpen}>
          <div className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              Share Event
            </Typography>

            <div id="transition-modal-description">
              Choose your favourite platform to Share
              <div className={classes.shareIcons}>
                <FacebookShareButton
                  url={shareObj.url}
                  quote={shareObj.title}
                  hashtag={shareObj.hashtag}
                >
                  <FacebookIcon round={true} size={36} />
                </FacebookShareButton>

                <TwitterShareButton
                  url={shareObj.url}
                  title={shareObj.title}
                  hashtag={shareObj.hashtag}
                >
                  <TwitterIcon round={true} size={36} />
                </TwitterShareButton>

                <WhatsappShareButton
                  url={shareObj.url}
                  title={shareObj.title}
                  separator=":: "
                >
                  <WhatsappIcon round={true} size={36} />
                </WhatsappShareButton>

                <LinkedinShareButton url={shareObj.url} title={shareObj.title}>
                  <LinkedinIcon round={true} size={36} />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ShareEvent;
