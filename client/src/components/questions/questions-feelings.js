import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles, Grid } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import SentimentDissatisfiedRoundedIcon from "@material-ui/icons/SentimentDissatisfiedRounded";

const useStyle = makeStyles(theme => ({}));

const SliderStyled = withStyles(theme => ({
    root: {
      width: "80%"
    }
  }))(Slider);

class Feelings extends Component {
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
          <h1> Let's talk about your feelings... </h1>
        </div>
        <div>
          <h1> Are you happy? </h1>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <SentimentDissatisfiedRoundedIcon style={{width: 70}} />
            <SliderStyled
              defaultValue={0}
              getAriaValueText={this.state.question1}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={4}
            />
            <SentimentSatisfiedRoundedIcon />
          </Grid>
        </div>
        <div>
          <h1> Are you alone? </h1>
        </div>
        <div>
          <h1> Are you happy playing at the playground? </h1>
        </div>
        <div>
          <h1> Do you like going to school? </h1>
        </div>
        <div>
          <h1> Are you happy with the friends you have? </h1>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyle)(Feelings);
