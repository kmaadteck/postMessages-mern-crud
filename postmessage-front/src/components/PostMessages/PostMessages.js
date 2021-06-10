<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/PostMessage";

const PostMessages = (props) => {

  const [x, setX] = useState(0);
  

  return <div>from PostMessages</div>;
};

=======
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/PostMessage";
import PostMessageForm from "./PostMessageForm";
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
});

const PostMessages = ({ classes, ...props }) => {
  // const [x, setX] = useState(0);
  /* In the state property currentIdm we will be kippikng a particalar record id;
 we can update this currendId when ze click on the Edit button => onClick={} 
 with an anonymous function and the record._id parameter */
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllPostMessages();
  }, []); // when the array empty it correspond to stape DidMonut

  const onDelete = (id) => {
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Post Box"
            content="Deleted successfully"
            scheme={Cinnamon.Crisp.SCHEME_PUPLE}
            icon={<DeleteSweep />}
          />
        ),
      });
    };
    if (window.confirm("Are you sure to delete this record ?"))
      props.deletePostMessage(id, onSuccess);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            {/* In the child component PostMessageForm, we are passing these property :
            {...{currentId, setCurrentId}}; with this form component, we can access to props
            of the component => (...props) */}
            <PostMessageForm {...{ currentId, setCurrentId }} />
            {/* From now, when we click on Edit button of a postMessage, this corresponding 
            current record's id wil be stored into useState property => currentId and we have
             shared this property via (...props) into PostMessageForm child component  */}
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <List>
              {props.postMessageList.map((record, index) => {
                return (
                  <Fragment key={index}>
                    <ListItem>
                      <ListItemText>
                        <Typography variant="h5">{record.title}</Typography>
                        <div>{record.message}</div>
                        <div className={classes.actionDiv}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.smMargin}
                            onClick={() => setCurrentId(record._id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.smMargin}
                            onClick={() => onDelete(record._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </ListItemText>
                    </ListItem>
                    <Divider component="li" />
                  </Fragment>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
>>>>>>> develop

/* this function maps List:[] inside const initialState={} object 
from reducers/postMessage.*state* represent the redux store state.
it contain all of the properties like ze have passed 
in the list:[] inside const initialState={} object  */
<<<<<<< HEAD
const mapStateToProps =state => ({
  postMessageList: state.postMessage.list
})

/* this function maps const fetchAll() from actions/postMessage   */
const mapActionToProps = {
    fetchAllPostMessages : actions.fetchAll
}
=======
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

/* this function maps const fetchAll() from actions/postMessage   */
const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
  deletePostMessage: actions.Delete,
};

>>>>>>> develop
//to access to this function => props.fetchAllPostMessages

/* explain synthax like this: The function connect() 
will return a function and to that return function, 
we are passing PostMessages component as a parameter.
This connect function has 2 parameters to map:{ 
  actions|postMessage => fetchAll and
  // reducers|postMessage const initialState => list:[] to map all of the datas stored in array List   */
<<<<<<< HEAD
export default connect(mapStateToProps,mapActionToProps)(PostMessages);
=======
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(PostMessages));
>>>>>>> develop
