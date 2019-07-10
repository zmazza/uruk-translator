import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    marginTop: 20
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 175,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));


const LanguageInputField = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container} >
      <TextField
        onChange={props.onChangeHandler}
        onKeyPress={props.translateMessageWithEnterKeyHandler}
        id="standard-full-width"
        label="English Input"
        style={{ margin: 8 }}
        helperText="Enter what you would like to translate in English here."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      
      <Button onClick={props.translateMessage} color="primary" className={classes.button}>
        Translate!
      </Button>
    </div>
  );
}

export default LanguageInputField;