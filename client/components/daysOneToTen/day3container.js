import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Day3 from './day3';
import Day3b from './day3b';



class Day3Container extends React.Component {

  render() {
    if (this.props.Day3A) {
      return (
        <div className="PHONEDIV">
          <div className="Day3MainDiv">
            <Day3 />
          </div>
        </div>
      )
    } else {
      return (
        <div className="PHONEDIV">
          <div className="Day3MainDiv">
            <Day3b />
          </div>
        </div> 
      )
    }
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day3A: state.Day3A,
  Day3B: state.Day3B
}))(Day3Container);
