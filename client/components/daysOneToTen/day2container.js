import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Day2 from './day2';
import Day2b from './day2b';


class Day2Container extends React.Component {

  render() {
    if (!this.props.Day2B) {
      return (
        <div className="PHONEDIV">
          <div className="Day2MainDiv">
            <Day2 />
          </div>
        </div>
      )
    } else {
      return (
        <div className="PHONEDIV">
          <div className="Day2MainDiv">
            <Day2b />
          </div>
        </div> 
      )
    }
  }

}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day2B: state.Day2B
}))(Day2Container);