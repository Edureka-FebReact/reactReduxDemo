import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import DisplayItems from "../components/displayItems";

class App extends React.Component {
  componentDidMount() {
    this.props.foodItems();
  } // this will call the action when the component mounts
  render() {
    return (
      <div>
        <DisplayItems datalist={this.props.finalState}></DisplayItems>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // this will be used to recieve teh state from the reducer
  return {
    finalState: state.food, // this is a prop which will get the the state which we re reciveing
  };
}
export default connect(mapStateToProps, actions)(App);
