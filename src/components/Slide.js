import { useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";

function Slide() {
  const { classes } = useStyles({});

  return (
    <div className={classes.page} onLoad={window.scrollTo(0, 0)}>
      <div className="head">
 
      </div>

      <div className="body">
        <h1>Send a signal</h1>
        <h5>for anything you want</h5>
      </div>
    </div>
  );
}

const useStyles = makeStyles()((_, props) => ({
  page: {
    backgroundColor: "grey",
    position: "relative",
    overflow: "scroll",
    height: "100vh",
  },
}));

export default Slide;
