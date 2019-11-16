import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

class Home extends Component {  

    constructor(props) {
        super(props);

        this.state = { modalOpen: false };
    }

    handleClickOpen = () => {
        this.setState({modalOpen: true});
      };
    
    handleClose = () => {
        this.setState({modalOpen: false});
    };

    handleConfirm = () => {
        console.log("CONFIRMED")
        this.setState({modalOpen: false});
    }
    

    render() {
        return (
            <div>
                <Dialog open={this.state.modalOpen} onClose={() => {this.handleClose() }} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Group</DialogTitle>
                    <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Group name"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => {this.handleClose() }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {this.handleConfirm() }} color="primary">
                        Confirm
                    </Button>
                    </DialogActions>
                </Dialog>

                <h1> Groups lists from professor X </h1>
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick={() => {this.handleClickOpen() }}/>
                </Fab>
                <List component="nav" className={this.props.classes.root} aria-label="contacts">
                <ListItem button>
                    <ListItemText primary="Chelsea Otakan" onClick={() => {console.log("first")}}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Eric Hoffman" onClick={() => {console.log("second")}}/>
                </ListItem>
                </List>
            </div>
            
        );
    }
}

export default withStyles(useStyle)(Home)