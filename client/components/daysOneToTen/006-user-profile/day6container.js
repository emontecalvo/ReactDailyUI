import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Day6 from './day6';



class Day6Container extends React.Component {

  render() {

      return (
        <div className="PHONEDIV">
          <div className="Day6MainDiv">
            <Day6 />
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
}))(Day6Container);
