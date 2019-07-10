import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      marginTop: 20,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'red'
  },
}));



const TranslatedMessageField = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Fade in={props.isMessageTranslated}>
          <Paper elevation={4} className={classes.paper}>
            Nuw ur spekin bloochok-hai!: <br/> {props.TranslatedMessage}
          </Paper>
        </Fade>
      </div>
    )
}

export default TranslatedMessageField;