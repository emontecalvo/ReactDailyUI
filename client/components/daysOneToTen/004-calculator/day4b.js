import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';


class Day4b extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  render() { 
    return (
        <div className="Day1Div">
          <div className="day1thanks">
            <p className="Day1Bpara">thank you for signing up!</p>
            <p>check your email</p>
            <p>for a confirmation link</p>
            <button className="Day1Btn" onClick={() => this.showHome()}><i className="fa fa-fw fa-chevron-left"></i> back to UI's&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day1B: state.Day1B
}))(Day4b);
