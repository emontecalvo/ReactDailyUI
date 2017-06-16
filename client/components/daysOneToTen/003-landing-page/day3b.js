import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';


class Day3b extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  render() { 
    return (
        <div>
          <div className="Day3BtnDiv">
            <button className="Day3Btn" onClick={() => this.showHome()}><i className="fa fa-fw fa-chevron-left"></i> back to UI's&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day3A: state.Day3A,
  Day3B: state.Day3B,
}))(Day3b);
