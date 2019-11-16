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
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TextFieldStyled = withStyles(theme => ({
    root: {
      marginBottom: '20px'
    }
  }))(TextField);

const ColorButton = withStyles(theme => ({
    root: {
      color: 'white',
      backgroundColor: '#00A99D',
      '&:hover': {
        backgroundColor: '#00A99D',
      },
      marginLeft: '20px'
    },
  }))(Fab);

class Home extends Component {  

    constructor(props) {
        super(props);

        this.state = { 
            modalOpen: false,
            listItems: new Map()
        };
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
    
    loadGroups = () => {
        
        // Llista de grups

        /*
        
        */ 


        
                    
    }


    render() {
        return (
            <div>
                <Dialog open={this.state.modalOpen} onClose={() => {this.handleClose() }} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Group</DialogTitle>
                    <DialogContent>
                    <TextFieldStyled
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Group name"
                        fullWidth
                    />
                    <TextFieldStyled
                        autoFocus
                        margin="dense"
                        id="student-names"
                        multiline
                        rowsMax="4"
                        label="Student names (separated by ,)"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                        <ColorButton onClick={() => {this.handleClose() }} color="primary" variant="contained">
                            Cancel
                        </ColorButton> 
                        <ColorButton onClick={() => {this.handleConfirm() }} color="primary" variant="contained">
                            Create
                        </ColorButton>
                    </DialogActions>
                </Dialog>

                <h1 style={{textAlign: 'center'}}> Groups lists from professor X </h1>
                <ColorButton variant="contained" onClick={() => {this.handleClickOpen() }}>
                    <AddIcon /> Create new group
                </ColorButton>
                <List component="nav" className={this.props.classes.root} aria-label="contacts" style={{margin: '20px'}}>
                    <ListItem button> <ListItemText primary={"asd"} onClick={() => {console.log("asd")}}/> </ListItem>
                </List>
            </div>
            
        );
    }
}

export default withStyles(useStyle)(Home)