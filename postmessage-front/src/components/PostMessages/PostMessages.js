import { Grid, List, Paper, withStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/PostMessage";
import PostMessageForm from "./PostMessageForm";


const styles = theme => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2)
  }
})

const PostMessages = ({classes, ...props}) => {
  
  // const [x, setX] = useState(0);
  // setX(5);
  useEffect(() => {
    props.fetchAllPostMessages();
  }, []); // when the array empty it correspond to stape DidMonut

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessageForm />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {

            }
          </List>
        </Paper>
      </Grid>
    </Grid>
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
  fetchAllPostMessages: actions.fetchAll,
};
//to access to this function => props.fetchAllPostMessages

/* explain synthax like this: The function connect() 
will return a function and to that return function, 
we are passing PostMessages component as a parameter.
This connect function has 2 parameters to map:{ 
  actions|postMessage => fetchAll and
  // reducers|postMessage const initialState => list:[] to map all of the datas stored in array List   */
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessages));
