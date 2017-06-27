import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import Day8 from './day8';



class Day8Container extends React.Component {

  render() {

      return (
        <div className="PHONEDIV">
          <div className="Day8MainDiv">
            <Day8 />
          </div>
        </div> 
      )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
}))(Day8Container);
