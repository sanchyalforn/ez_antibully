import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";


import api, { getUsername } from "../../api/axios";

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const TextFieldStyled = withStyles(theme => ({
  root: {
    marginBottom: "20px"
  }
}))(TextField);

const ColorButton = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "#00A99D",
    "&:hover": {
      backgroundColor: "#00A99D"
    },
    marginLeft: "20px"
  }
}))(Fab);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      listItems: new Map(),
      groupname: "",
      students: "",
      data: []
    };
  }

  componentDidMount() {
    this.loadGroups();
  }

  handleClickOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false, groupname: "", students: "" });
  };

  handleConfirm = () => {
    let studentsArr = this.state.students.split(",");

    console.log(studentsArr);


    api
      .post("/newGroup", {
        name: this.state.groupname,
        students: this.state.studentsArr
      })
      .then(resp => {
        this.setState({ modalOpen: false, groupname: "", students: "" });
      })
      .catch(error => {
        this.setState({ openError: true });
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  loadGroups = () => {
    api
      .get("/getGroups")
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      });
    let arr = [];
    arr.push(
      <ListItem button>
        <ListItemText
          primary={"LauzHack"}
          onClick={() => {
            console.log("LauzHack");
            this.props.history.push("/teacher/graph");
          }}
        />
      </ListItem>
    );
    this.setState({ data: arr });
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.modalOpen}
          onClose={() => {
            this.handleClose();
          }}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Group</DialogTitle>
          <DialogContent>
            <TextFieldStyled
              autoFocus
              margin="dense"
              id="name"
              label="Group name"
              onChange={e => this.setState({ groupname: e.target.value })}
              fullWidth
            />
            <TextFieldStyled
              autoFocus
              margin="dense"
              id="student-names"
              multiline
              rowsMax="4"
              label="Student names (separated by ,)"
              onChange={e => this.setState({ students: e.target.value })}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <ColorButton
              onClick={() => {
                this.handleClose();
              }}
              variant="extended"
            >
              Cancel
            </ColorButton>
            <ColorButton
              onClick={() => {
                this.handleConfirm();
              }}
              variant="extended"
            >
              Create
            </ColorButton>
          </DialogActions>
        </Dialog>

        <h1 style={{ textAlign: "center" }}> Groups lists for {getUsername()} </h1>
        {/*<ColorButton
          variant="extended"
          onClick={() => {
            this.handleClickOpen();
          }}
        >
          <AddIcon /> Create new group
        </ColorButton>*/}
        <List
          component="nav"
          className={this.props.classes.root}
          aria-label="contacts"
          style={{ margin: "20px" }}
        >
          {this.state.data}
        </List>
      </div>
    );
  }
}

export default withStyles(useStyle)(Home);
