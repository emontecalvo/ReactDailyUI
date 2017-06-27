import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';


class Day8 extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  addFollower() {
    this.props.dispatch(actions.add_follower());
  }

  render() { 
    return (
        <div className="Day8Div">
          <div className="fallingTriangle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
          <p>404</p>
          <p>sacred geometry</p>
          <p>not found here</p>
          <div className="Day8BtnDiv">
            <button type="submit" onClick={() => this.showHome()}>back to Daily UI's</button>
          </div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
}))(Day8);
