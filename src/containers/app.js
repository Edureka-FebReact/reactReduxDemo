import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.foodItems();
  } // this will call the action when the component mounts
  render() {
    return this.props.finalState;
  }
}
function mapStateToProps(state) {
  // this will be used to recieve teh state from the reducer
  return {
    finalState: state.food, // this is a prop which will get the the state which we re reciveing
  };
}
export default connect(mapStateToProps, actions)(App);
