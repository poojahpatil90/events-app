import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AlertError({ open, handleClose }) {
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="error">
        This action is allowed only for a Premium member! To learn more about
        Premium subscription
        <Button size="small">Click Here</Button>
      </Alert>
    </Snackbar>
  );
}

export default AlertError;
