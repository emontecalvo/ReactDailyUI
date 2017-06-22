import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Day5 from './day5';



class Day5Container extends React.Component {

  render() {

      return (
        <div className="PHONEDIV">
          <div className="Day5MainDiv">
            <Day5 />
          </div>
        </div> 
      )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
}))(Day5Container);
