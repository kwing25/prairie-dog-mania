import { useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";

function Slide() {
  const { classes } = useStyles({});

  return (
    <div className={classes.page} onLoad={window.scrollTo(0, 0)}>
      <div className="head">
        <h1>Title</h1>
      </div>

      <div className="body">
        <p>
          {" "}
          My anger outweights my guilt. Does it come in black? It's ends here.
          I'm not wearing hockey pads. This isn't a car. Well, you see... I'm
          buying this hotel and setting some new rules about the pool area.
        </p>
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
