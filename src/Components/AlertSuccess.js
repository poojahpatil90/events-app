import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AlertSuccess({ successOpen, handleSuccessClose, title }) {
  return (
    <Snackbar
      open={successOpen}
      onClose={handleSuccessClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleSuccessClose} severity="success">
        You are successfully Registered for {title}.
      </Alert>
    </Snackbar>
  );
}

export default AlertSuccess;
