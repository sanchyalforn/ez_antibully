import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles, Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

const useStyle = makeStyles(theme => ({}));

const ColorButton = withStyles(theme => ({
root: {
    color: "white",
    backgroundColor: "#00A99D",
    "&:hover": {
    backgroundColor: "#00877E"
    },
    "&:active": {
    backgroundColor: "#04D1C3"
    },
    marginTop: "20px",
    width: "400px"
}
}))(Fab);

class Relations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: 0
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1> Let's start talking about the relations with your classmates! </h1>
        </div>
        <div>
          <h1> Who would you choose to do a school project? </h1>
        </div>
        <div>
          <h1> Who would be the best leader? </h1>
        </div>
        <div>
          <h1> Who would you choose to play at the playground? </h1>
        </div>
        <div>
          <h1> Who would you choose to be in an airplain cabin? </h1>
        </div>
        <div>
          <h1> Who would be the pilot? </h1>
        </div>
        <div>
          <h1>  Who would you believe most? </h1>
        </div>
        <div>
          <h1> Who tell the best stories? </h1>
        </div>
        <div>
          <h1> Yeey! You have finished this part! </h1>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyle)(Relations);
