import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Day7 from './day7';



class Day7Container extends React.Component {

  render() {

      return (
        <div className="PHONEDIV">
          <div className="Day6MainDiv">
            <Day7 />
          </div>
        </div> 
      )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
}))(Day7Container);
