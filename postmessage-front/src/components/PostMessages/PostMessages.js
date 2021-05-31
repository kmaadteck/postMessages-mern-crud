import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/PostMessage";

const PostMessages = (props) => {

  const [x, setX] = useState(0);
  

  return <div>from PostMessages</div>;
};


/* this function maps List:[] inside const initialState={} object 
from reducers/postMessage.*state* represent the redux store state.
it contain all of the properties like ze have passed 
in the list:[] inside const initialState={} object  */
const mapStateToProps =state => ({
  postMessageList: state.postMessage.list
})

/* this function maps const fetchAll() from actions/postMessage   */
const mapActionToProps = {
    fetchAllPostMessages : actions.fetchAll
}
//to access to this function => props.fetchAllPostMessages

/* explain synthax like this: The function connect() 
will return a function and to that return function, 
we are passing PostMessages component as a parameter.
This connect function has 2 parameters to map:{ 
  actions|postMessage => fetchAll and
  // reducers|postMessage const initialState => list:[] to map all of the datas stored in array List   */
export default connect(mapStateToProps,mapActionToProps)(PostMessages);
