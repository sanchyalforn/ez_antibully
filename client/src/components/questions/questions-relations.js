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
      intro: true,
      question1: false,
      response1: "",
      question2: false,
      response2: "",
      question3: false,
      response3: "",
      question4: false,
      response4: "",
      question5: false,
      response5: "",
      question6: false,
      response6: "",
      question7: false,
      response7: "",
      end: false
    };
  }

  feelings = () => {
    // enviar respostes de totes les preguntes
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
      end: true
    });
  };

  render() {
    return (
      <div>
        {this.state.intro ? (
          <div>
            <h1>
              Let's start talking about the relations with your classmates!
            </h1>
            <ColorButton
              variant="extended"
              onClick={() => {
                this.toQuestion1();
              }}
            >
              Let's go!
            </ColorButton>
          </div>
        ) : null}
        {this.state.question1 ? (
          <div>
            <h1> Who would you choose to do a school project? </h1>
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
	  {this.state.question2 ? 
		<div>
          <h1> Who would be the best leader? </h1>
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
        </div> : null }
        {this.state.question3 ? <div>
          <h1> Who would you choose to play at the playground? </h1>
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
        </div> : null }
        {this.state.question4 ? <div>
          <h1> Who would you choose to be in an airplain cabin? </h1>
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
        </div> : null }
        {this.state.question5 ? <div>
          <h1> Who would be the pilot? </h1>
          <ColorButton
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
              this.toQuestion6();
            }}
          >            
            Next
          </ColorButton>
	  </div> : null }
        {this.state.question6 ? <div>
          <h1> Who would you believe most? </h1>
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
            onClick={() => {
              this.toQuestion7();
            }}
          >            
            Next
          </ColorButton>
	  </div> : null }
	  {this.state.question7 ? 
        <div> 
          <h1> Who tell the best stories? </h1>
          <ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion6();
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
        </div> : null }
        {this.state.end ? <div>
          <h1> Yeey! You have finished this part! </h1>
          <ColorButton
            variant="extended"
            onClick={() => {
              this.toQuestion7();
            }}
          >
            Back
          </ColorButton>
          <ColorButton
            variant="extended"
            onClick={() => {
              this.feelings();
            }}
          >
            Go to next part!
          </ColorButton>
        </div> : null }
      </div>
    );
  }
}

export default withStyles(useStyle)(Relations);
