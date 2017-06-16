import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Day1 from './day4';
import Day1b from './day4b';


class Day4Container extends React.Component {

  render() {
    if (!this.props.Day1B) {
      return (
        <div className="PHONEDIV">
          <div className="Day4MainDiv">
            <Day1 />
          </div>
        </div>
      )
    } else {
      return (
        <div className="PHONEDIV">
          <div className="Day4MainDiv">
            <Day1b />
          </div>
        </div> 
      )
    }
  }

}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day1B: state.Day1B
}))(Day4Container);