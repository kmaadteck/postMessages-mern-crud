<<<<<<< HEAD
import React from 'react'

const PostMessageForm = () => {
    return (
        <div>
            from PostMessageForm
        </div>
    )
}

export default PostMessageForm
=======
import { Button, TextField, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useForm from "../useForm";
import { connect } from "react-redux";
import * as actions from "../../actions/PostMessage";
import ButterToast, { Cinnamon } from "butter-toast";
import { AssignmentTurnedIn } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: " center",
  },
  postButton: {
    width: "50%",
  },
});

/*  we define a function for the parameters of the message and
pass them into useState() initiliazation   */
const initialFieldValues = {
  title: "",
  message: "",
};

const PostMessageForm = ({ classes, ...props }) => {
  /* In order to populate the inputText message, we use useEffect 
  to identify if we have change value of current id from parent component List
   */
  useEffect(() => {
    if (props.currentId !== 0){
      /* if it's not equal to 0, we will populate the next const validate() function 
    with "values" property and at the end the setValues({}) function find the particular
    record with the given id => "props.currentId". the record will be updated with the value
    recorded in setValues() and display at the screen */
      setValues({
        ...props.postMessageList.find((x) => x._id === props.currentId),
      });
      setErrors({});
    }
    /* props.currentId shared from list component; whenever the value change 
    in the list component, the call back function will be invoque if()...})  */
  }, [props.currentId]);

  const validate = () => {
    let temp = { ...errors };
    temp.title = values.title ? "" : "This field is required";
    temp.message = values.message ? "" : "This field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFieldValues, props.setCurrentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Post Box"
            content="Submitted successfully"
            scheme={Cinnamon.Crisp.SCHEME_PUPLE}
            icon={<AssignmentTurnedIn />}
          />
        ),
      });
      resetForm();
    };
    if (validate()) {
      /* in Order to identify wether it's a create or an update,
      we can check currentId, initialy it is equal to 0 (i.e => PostMessage parent component) */
      if (props.currentId === 0) props.createPostMessage(values, onSuccess);
      else props.updatePostMessage(props.currentId, values, onSuccess);
    }
  };
  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={values.title}
        onChange={handleInputChange}
        {...(errors.title && { error: true, helperText: errors.title })}
      />

      <TextField
        name="message"
        variant="outlined"
        label="Message"
        fullWidth
        multiline
        rows={4}
        value={values.message}
        onChange={handleInputChange}
        {...(errors.message && { error: true, helperText: errors.message })}
      />
      <Button
        variant="contained"
        className={classes.postButton}
        color="primary"
        size="large"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

/* this function maps List:[] inside const initialState={} object 
from reducers/postMessage.*state* represent the redux store state.
it contain all of the properties like ze have passed 
in the list:[] inside const initialState={} object  */
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

/* this function maps const fetchAll() from actions/postMessage   */
const mapActionToProps = {
  createPostMessage: actions.create,
  updatePostMessage: actions.update,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(PostMessageForm));
>>>>>>> develop
