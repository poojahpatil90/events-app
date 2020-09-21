import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./About.css";

function About() {
  return (
    <Paper className="paper">
      <div className="about__wrapper">
        <Typography gutterBottom variant="h5" component="h2">
          About
        </Typography>

        <Typography variant="body1" gutterBottom component="p">
          This is a React application developed by me (Pooja Patil). This
          Application is built to demonstrate my Front-end coding skills as part
          of VanHack coding challenge.
          <br />
          <br />I planned to build a beautiful, clean React app with the
          required features. Unfortunately, I could not fit my whole application
          into a single Javascript/HTML/CSS page provided in HackerRank. Hence,
          I decided to build this separately and host it on Netlify. I have
          integrated this application into the HackerRank challenge page via an
          Iframe. You can visit the application separately using the link
          provided below. In order to check my code, please visit the github
          link provided below. Click on 'VanHack Events' at the top-left corner
          to test my application.
          <br />
          <br />
          <strong>Website on Netlify:</strong> &nbsp;
          <a href="https://pooja-patil-events-app.netlify.app/" target="blank">
            VanHack Events App
          </a>
          <br />
          <strong>Github code Link:</strong> &nbsp;
          <a href="https://github.com/poojahpatil90/events-app/" target="blank">
            App Code
          </a>
          <br />
          <br />
          Kindly contact me in case you have any questions or concerns.
          <br />
          <strong>Email:</strong> pooja.h.patil90@gmail.com
        </Typography>
      </div>
    </Paper>
  );
}

export default About;
