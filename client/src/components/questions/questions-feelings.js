import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import smile from "../../images/smile.png";
import sad from "../../images/sad.png";
import sliderGif from "../../images/slider.gif";
import thanksGif from "../../images/thanks.gif";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const useStyle = makeStyles(theme => ({}));

const SliderStyled = withStyles(theme => ({
  root: {
    width: "55%"
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
    marginTop: "80px",
    width: "200px",
    marginLeft: "20px"
  }
}))(Fab);

const ColorButtonStart = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "#00A99D",
    "&:hover": {
      backgroundColor: "#00877E"
    },
    "&:active": {
      backgroundColor: "#04D1C3"
    },
    width: "200px",
    fontSize: "30px",
    height: "80px"
  }
}))(Fab);

const ColorButtonEnd = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "#00A99D",
    "&:hover": {
      backgroundColor: "#00877E"
    },
    "&:active": {
      backgroundColor: "#04D1C3"
    },
    fontSize: "30px",
    height: "80px"
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

  submitFeelingAnswers = () => {
      // Post que torna totes les respostes jeje
  }

  render() {
    return (
      <div>
        {this.state.intro ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 30,
                marginTop: 20
              }}
            >
              LET'S TALK ABOUT YOUR FEELINGS...
            </h1>
            <div style={{ textAlign: "center" }}>
              <img src={sliderGif} alt="gif" style={{ textAlign: "center" }} />
            </div>
            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                marginBottom: 20,
                marginTop: 30
              }}
            >
              In the following questions you will need to rate your feelings
              between 0 and 5
            </h2>
            <div style={{ textAlign: "center" }}>
              <ColorButtonStart
                variant="extended"
                onClick={() => {
                  this.toQuestion1();
                }}
              >
                Start!!
              </ColorButtonStart>
            </div>
          </div>
        ) : null}
        {this.state.question1 ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 100,
                marginTop: 40
              }}
            >
              ARE YOU HAPPY?
            </h1>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <img src={sad} alt="sad" />
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
              <img src={smile} alt="smile" />
            </Grid>
            <div style={{ textAlign: "center" }}>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion2();
                }}
              >
                Next
                <NavigateNextRoundedIcon />
              </ColorButton>
            </div>
          </div>
        ) : null}
        {this.state.question2 ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 100,
                marginTop: 40
              }}
            >
              ARE YOU ALONE?
            </h1>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <img src={sad} alt="sad" />
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
              <img src={smile} alt="smile" />
            </Grid>
            <div style={{ textAlign: "center" }}>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion1();
                }}
              >
                <ArrowBackIosRoundedIcon />
                Back
              </ColorButton>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion3();
                }}
              >
                Next
                <NavigateNextRoundedIcon />
              </ColorButton>
            </div>
          </div>
        ) : null}
        {this.state.question3 ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 100,
                marginTop: 40
              }}
            >
              ARE YOU HAPPY PLAYING AT THE PLAYGROUND?
            </h1>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <img src={sad} alt="sad" />
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
              <img src={smile} alt="smile" />
            </Grid>
            <div style={{ textAlign: "center" }}>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion2();
                }}
              >
                <ArrowBackIosRoundedIcon />
                Back
              </ColorButton>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion4();
                }}
              >
                Next
                <NavigateNextRoundedIcon />
              </ColorButton>
            </div>
          </div>
        ) : null}
        {this.state.question4 ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 100,
                marginTop: 40
              }}
            >
              DO YOU LIKE GOING TO SCHOOL?
            </h1>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <img src={sad} alt="sad" />
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
              <img src={smile} alt="smile" />
            </Grid>
            <div style={{ textAlign: "center" }}>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion3();
                }}
              >
                <ArrowBackIosRoundedIcon />
                Back
              </ColorButton>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion5();
                }}
              >
                Next
                <NavigateNextRoundedIcon />
              </ColorButton>
            </div>
          </div>
        ) : null}
        {this.state.question5 ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 100,
                marginTop: 40
              }}
            >
              ARE YOU HAPPY WITH THE FRIENDS YOU HAVE?
            </h1>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <img src={sad} alt="sad" />
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
              <img src={smile} alt="smile" />
            </Grid>
            <div style={{ textAlign: "center" }}>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion4();
                }}
              >
                <ArrowBackIosRoundedIcon />
                Back
              </ColorButton>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toEnd();
                }}
              >
                Next
                <NavigateNextRoundedIcon />
              </ColorButton>
            </div>
            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                marginBottom: 20,
                marginTop: 30,
                color: '#00A99D'
              }}
            >
              ** This is the last question! You would not come back! <br/> Be sure you answer well!
            </h2>
          </div>
        ) : null}
        {this.state.end ? (
          <div>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 30,
                marginTop: 20
              }}
            >
              YEY! YOU HAVE FINISHED THE TEST!!
            </h1>
            <div style={{ textAlign: "center" }}>
              <img src={thanksGif} alt="gif" style={{ textAlign: "center" }} />
            </div>
            <div style={{ textAlign: "center", marginTop: '25px' }}>
              <ColorButtonEnd
                variant="extended"
                onClick={() => {
                  this.submitFeelingAnswers();
                }}
              >
                SUBMIT YOUR ANSWERS!!
              </ColorButtonEnd>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(useStyle)(Feelings);
