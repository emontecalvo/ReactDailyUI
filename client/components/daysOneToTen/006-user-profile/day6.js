import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';


class Day6 extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  addFollower() {
    this.props.dispatch(actions.add_follower());
  }

  render() { 
    return (
        <div>
          <div className="Day6Div">
            <div className="Day6Img">
            </div>
            <p>needs a new name</p>
            <p>(last one didn't stick)</p>
          </div>
          <div className="Day6BtnDiv">
            <button><span>{this.props.Day6Follow} followers</span></button>
            <button><span>occupation: princess</span></button>
            <button onClick={() => this.addFollower()}><span>{this.props.Day6FollowBtn}</span></button>
            <button><span>location</span></button>
            <button><span>best way to contact</span></button>
            <button className="Day3Btn" type="submit" onClick={() => this.showHome()}>back to Daily UI's</button>
          </div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day6Follow: state.Day6Follow,
  Day6FollowBool: state.Day6FollowBool,
  Day6FollowBtn: state.Day6FollowBtn,
}))(Day6);
