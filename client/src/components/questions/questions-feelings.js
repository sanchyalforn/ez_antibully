import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid"
import Fab from "@material-ui/core/Fab";
import '../../images/smile.png'
import '../../images/sad.png'

const useStyle = makeStyles(theme => ({}));

const SliderStyled = withStyles(theme => ({
  root: {
    width: "80%"
  }
}))(Slider);

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

class Feelings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
      question1: false,
      response1: 0,
      question2: false,
      response2: 0,
      question3: false,
      response3: 0,
      question4: false,
      response4: 0,
      question5: false,
      response5: 0,
      end: false
    };
  }

  toQuestion1 = () => {
    this.setState({
      intro: false,
      question1: true,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
      end: false
    });
  };

  toQuestion2 = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: true,
      question3: false,
      question4: false,
      question5: false,
      end: false
    });
  };

  toQuestion3 = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: true,
      question4: false,
      question5: false,
      end: false
    });
  };

  toQuestion4 = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: false,
      question4: true,
      question5: false,
      end: false
    });
  };

  toQuestion5 = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      question5: true,
      end: false
    });
  };

  toEnd = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
      end: true
    });
  };

  render() {
    return (
      <div>
        {this.state.intro ? (
          <div>
            <h1> Let's talk about your feelings... </h1>
            <ColorButton
              variant="extended"
              onClick={() => {
                this.toQuestion1();
              }}
            >
              Next
            </ColorButton>
          </div>
        ) : null}
        {this.state.question1 ? (
          <div>
            <h1> Are you happy? </h1>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <img src="/../../images/sad.png" alt="sad" />
              <SliderStyled
                defaultValue={0}
                getAriaValueText={this.state.response1}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={4}
              />
              <img src="/../../images/smile.png" alt="smile" />
            </Grid>
            <ColorButton
              variant="extended"
              onClick={() => {
                this.toQuestion2();
              }}
            >
              Next
            </ColorButton>
          </div>
        ) : null}
        {this.state.question2 ? (
          <div>
            <h1> Are you alone? </h1>
            <ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion1();
            }}
          >
            Back
          </ColorButton>
          <ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion3();
            }}
          >            
            Next
          </ColorButton>
          </div>
        ) : null}
        {this.state.question3 ? (
          <div>
            <h1> Are you happy playing at the playground? </h1>
            <ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion2();
            }}
          >
            Back
          </ColorButton>
          <ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion4();
            }}
          >            
            Next
          </ColorButton>
          </div>
        ) : null}
        {this.state.question4 ? (
          <div>
            <h1> Do you like going to school? </h1>
            <ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion3();
            }}
          >
            Back
          </ColorButton>
          <ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion5();
            }}
          >            
            Next
          </ColorButton>
          </div>
        ) : null}
        {this.state.question5 ? (
          <div>
            <h1> Are you happy with the friends you have? </h1><ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion4();
            }}
          >
            Back
          </ColorButton>
          <ColorButton
            variant="extended"
            onClick={() => {
              this.toEnd();
            }}
          >            
            Next
          </ColorButton>
          </div>
        ) : null}
        {this.state.end ? (
          <div>
            <h1> Yey! You have finished the test!! Thank you </h1>
            <ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion5();
            }}
          >
            Back
          </ColorButton>
          <ColorButton
            variant="extended"
            onClick={() => {console.log("END")}}
          >            
            Finish
          </ColorButton>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(useStyle)(Feelings);
