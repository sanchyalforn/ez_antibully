import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import letsgoGif from "../../images/start.gif";
import continueGif from "../../images/continue.gif";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import api, { getUserCode } from "../../api/axios";

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
    marginTop: "80px",
    width: "200px",
    marginLeft: "20px"
  }
}))(Fab);

const ColorButtonWhite = withStyles(theme => ({
  root: {
    color: "#00000",
    border: "#00A99D",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#00877E"
    },
    "&:active": {
      backgroundColor: "#04D1C3"
    },
    width: "450px",
    marginBottom: "20px",
    marginLeft: "20px",
    fontSize: "20px"
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

const SelectStyled = withStyles(theme => ({
  root: {
    width: "450px"
  }
}))(Select);

class Relations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
      question1: false,
      response1: [],
      question2: false,
      response2: "Nobody selected",
      question3: false,
      response3: [],
      question4: false,
      response4: [],
      question5: false,
      response5: "",
      question6: false,
      response6: [],
      question7: false,
      response7: [],
      end: false,
      classmates: [],
      partner1: "",
      partner2: "",
      partner3: "",
      partner4: "",
      playground1: "",
      playground2: "",
      playground3: "",
      playground4: "",
      airplane1: "",
      airplane2: "",
      stories1: "",
      stories2: "",
      stories3: "",
      belive1: "",
      belive2: "",
      belive3: ""
    };
  }

  componentDidMount() {
    api
      .get("/getUsers")
      .then(resp => {
        console.log(resp.data);
        let parti = resp.data;
        let arr = [];
        for (let i = 0; i < parti.length; ++i) {
          arr.push(<MenuItem value={parti[i].Name}>{parti[i].Name}</MenuItem>);
        }
        this.setState({ classmates: arr });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      });
  }

  feelings = () => {
    console.log(this.state);

    var sendToBackend = {
      "response1": this.state.response1,
      "response2": this.state.response2,
      "response3": this.state.response3,
      "response4": this.state.response4,
      "response5": this.state.response5,
      "response6": this.state.response6,
      "response7": this.state.response7,
    }

    console.log(sendToBackend);

    api
      .post("/updateEdges?student=" + getUserCode(), sendToBackend)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      });
    this.props.history.push("/student/2");
  };

  toQuestion1 = () => {
    this.setState({
      intro: false,
      question1: true,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
      question6: false,
      question7: false,
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
      question6: false,
      question7: false,
      end: false
    });
  };

  toQuestion2Fw = () => {
    let arr = [
      this.state.partner1,
      this.state.partner2,
      this.state.partner3,
      this.state.partner4
    ];
    this.setState({
      intro: false,
      question1: false,
      response1: arr,
      question2: true,
      question3: false,
      question4: false,
      question5: false,
      question6: false,
      question7: false,
      end: false
    });
    console.log(this.state);
  };

  toQuestion3 = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: true,
      question4: false,
      question5: false,
      question6: false,
      question7: false,
      end: false
    });
    console.log(this.state);
  };

  toQuestion4 = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: false,
      question4: true,
      question5: false,
      question6: false,
      question7: false,
      end: false
    });
  };

  toQuestion4Fwd = () => {
    let arr = [
      this.state.playground1,
      this.state.playground2,
      this.state.playground3,
      this.state.playground4
    ];
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: false,
      response3: arr,
      question4: true,
      question5: false,
      question6: false,
      question7: false,
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
      question6: false,
      question7: false,
      end: false
    });
  };

  toQuestion5Fwd = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      response4: [this.state.airplane1, this.state.airplane2],
      question5: true,
      question6: false,
      question7: false,
      end: false
    });
  };

  toQuestion6 = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
      question6: true,
      question7: false,
      end: false
    });
  };

  toQuestion7 = () => {
    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
      question6: false,
      question7: true,
      end: false
    });
  };

  toQuestion7Fwd = () => {
    let arr = [];
    if (this.state.belive1 !== "") {
      arr.push(this.state.belive1);
    }
    if (this.state.belive2 !== "") {
      arr.push(this.state.belive2);
    }
    if (this.state.belive3 !== "") {
      arr.push(this.state.belive3);
    }

    this.setState({
      intro: false,
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
      question6: false,
      response6: arr,
      question7: true,
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
      question6: false,
      question7: false,
      response7: [
        this.state.stories1,
        this.state.stories2,
        this.state.stories3
      ],
      end: true
    });
  };

  selectOption = name => {
    if (name === "first") {
      this.setState({ response2: this.state.partner1 });
      console.log(this.state);
    } else if (name === "second") {
      this.setState({ response2: this.state.partner2 });
      console.log(this.state);
    } else if (name === "third") {
      this.setState({ response2: this.state.partner3 });
      console.log(this.state);
    } else if (name === "fourth") {
      this.setState({ response2: this.state.partner4 });
      console.log(this.state);
    } else if (name === "me") {
      this.setState({ response2: "Me" });
      console.log(this.state);
    }
  };

  selectOptionPilot = name => {
    if (name === "first") {
      this.setState({ response5: this.state.airplane1 });
      console.log(this.state);
    } else if (name === "second") {
      this.setState({ response5: this.state.airplane2 });
      console.log(this.state);
    } else if (name === "me") {
      this.setState({ response5: "Me" });
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        {this.state.intro ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 40,
                marginTop: 20
              }}
            >
              LET'S START TALKING ABOUT YOUR CLASSMATES!
            </h1>
            <div style={{ textAlign: "center" }}>
              <img
                src={letsgoGif}
                alt="gif"
                style={{ textAlign: "center", height: "250px" }}
              />
            </div>
            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                marginBottom: 20,
                marginTop: 30
              }}
            >
              In the following questions you will need to select some of your
              classmates for special activities
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
              WHO WOULD YOU CHOOSE TO DO A SCHOOL PROJECT?
            </h1>

            <Grid container spacing={4}>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    First partner
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.partner1}
                    onChange={e => {
                      this.setState({ partner1: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Second partner
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.partner2}
                    onChange={e => {
                      this.setState({ partner2: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Third partner
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.partner3}
                    onChange={e => {
                      this.setState({ partner3: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Fourth partner
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.partner4}
                    onChange={e => {
                      this.setState({ partner4: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
            </Grid>

            <div style={{ textAlign: "center" }}>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion2Fw();
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
                marginBottom: 80,
                marginTop: 40
              }}
            >
              WHO WOULD BE THE BEST LEADER
            </h1>

            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                color: "#00A99D"
              }}
            >
              {this.state.response2}
            </h2>
            <Grid container>
              <Grid item xs={6}>
                <ColorButtonWhite
                  variant="extended"
                  onClick={() => {
                    this.selectOption("first");
                  }}
                >
                  {this.state.partner1}
                </ColorButtonWhite>
              </Grid>
              <Grid item xs={6}>
                <ColorButtonWhite
                  variant="extended"
                  onClick={() => {
                    this.selectOption("second");
                  }}
                >
                  {this.state.partner2}
                </ColorButtonWhite>
              </Grid>
              <Grid item xs={6}>
                <ColorButtonWhite
                  variant="extended"
                  onClick={() => {
                    this.selectOption("third");
                  }}
                >
                  {this.state.partner3}
                </ColorButtonWhite>
              </Grid>
              <Grid item xs={6}>
                <ColorButtonWhite
                  variant="extended"
                  onClick={() => {
                    this.selectOption("fourth");
                  }}
                >
                  {this.state.partner4}
                </ColorButtonWhite>
              </Grid>
              <Grid item xs={6}>
                <ColorButtonWhite
                  variant="extended"
                  onClick={() => {
                    this.selectOption("me");
                  }}
                >
                  ME
                </ColorButtonWhite>
              </Grid>
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
              WHO WOULD YOU CHOOSE TO PLAY AT THE PLAYGROUND?
            </h1>

            <Grid container spacing={4}>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    First friend
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.playground1}
                    onChange={e => {
                      this.setState({ playground1: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Second friend
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.playground2}
                    onChange={e => {
                      this.setState({ playground2: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Third friend
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.playground3}
                    onChange={e => {
                      this.setState({ playground3: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Fourth friend
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.playground4}
                    onChange={e => {
                      this.setState({ playground4: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
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
                  this.toQuestion4Fwd();
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
              WHO WOULD YOU CHOOSE TO BE IN AN AIRLPAIN CABIN?
            </h1>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    First tripulant
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.airplane1}
                    onChange={e => {
                      this.setState({ airplane1: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Second tripulant
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.airplane2}
                    onChange={e => {
                      this.setState({ airplane2: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
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
                  this.toQuestion5Fwd();
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
                marginBottom: 80,
                marginTop: 40
              }}
            >
              WHO WOULD BE THE PILOT?
            </h1>
            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                color: "#00A99D"
              }}
            >
              {this.state.response5}
            </h2>

            <Grid container>
              <Grid item xs={6}>
                <ColorButtonWhite
                  variant="extended"
                  onClick={() => {
                    this.selectOptionPilot("first");
                  }}
                >
                  {this.state.airplane1}
                </ColorButtonWhite>
              </Grid>
              <Grid item xs={6}>
                <ColorButtonWhite
                  variant="extended"
                  onClick={() => {
                    this.selectOptionPilot("second");
                  }}
                >
                  {this.state.airplane2}
                </ColorButtonWhite>
              </Grid>
              <Grid item xs={6}>
                <ColorButtonWhite
                  variant="extended"
                  onClick={() => {
                    this.selectOptionPilot("me");
                  }}
                >
                  ME
                </ColorButtonWhite>
              </Grid>
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
                  this.toQuestion6();
                }}
              >
                Next
                <NavigateNextRoundedIcon />
              </ColorButton>
            </div>
          </div>
        ) : null}
        {this.state.question6 ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 100,
                marginTop: 40
              }}
            >
              WHO WOULD YOU BELIVE MOST?
            </h1>
            <h2
              style={{
                textAlign: "center",
                fontSize: "30px",
                color: "#00A99D"
              }}
            >
              In this question you can select only one classmate and up to 3.{" "}
              <br /> The order is important!
            </h2>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    First confident
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.belive1}
                    onChange={e => {
                      this.setState({ belive1: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Second confident
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.belive2}
                    onChange={e => {
                      this.setState({ belive2: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Third confident
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.belive3}
                    onChange={e => {
                      this.setState({ belive3: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
            </Grid>

            <div style={{ textAlign: "center" }}>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion5();
                }}
              >
                <ArrowBackIosRoundedIcon />
                Back
              </ColorButton>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion7Fwd();
                }}
              >
                Next
                <NavigateNextRoundedIcon />
              </ColorButton>
            </div>
          </div>
        ) : null}
        {this.state.question7 ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 100,
                marginTop: 40
              }}
            >
              WHO IS THE BEST STORIES STORYTELLER?
            </h1>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    First storyteller
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.stories1}
                    onChange={e => {
                      this.setState({ stories1: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Second storyteller
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.stories2}
                    onChange={e => {
                      this.setState({ stories2: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Third storyteller
                  </InputLabel>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.stories3}
                    onChange={e => {
                      this.setState({ stories3: e.target.value });
                    }}
                  >
                    {this.state.classmates}
                  </SelectStyled>
                </FormControl>
              </Grid>
            </Grid>
            <div style={{ textAlign: "center" }}>
              <ColorButton
                variant="extended"
                onClick={() => {
                  this.toQuestion6();
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
                color: "#00A99D"
              }}
            >
              ** This is the last question! You would not come back! <br /> Be
              sure you answer well!
            </h2>
          </div>
        ) : null}
        {this.state.end ? (
          <div style={{ padding: 50 }}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "40px",
                marginBottom: 40,
                marginTop: 20
              }}
            >
              YEEY! YOU HAVE FINISHED THIS PART! BUT THERE IS MORE...
            </h1>
            <div style={{ textAlign: "center" }}>
              <img src={continueGif} alt="gif" />
            </div>
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <ColorButtonStart
                variant="extended"
                onClick={() => {
                  this.feelings();
                }}
              >
                CONTINUE
              </ColorButtonStart>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(useStyle)(Relations);
