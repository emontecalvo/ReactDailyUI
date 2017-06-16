import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';


class Day4 extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  showDay1b() {
    this.props.dispatch(actions.view_day_one_b());
  }

  render() { 
    return (
        <div className="Day4Div">
          <div className="input">
            <form onSubmit={(e) => {
              e.preventDefault() }}>
              <h3>I AM DAY 4</h3>
              <button className="Day1Btn" onClick={() => this.showHome()}><i className="fa fa-fw fa-chevron-left"></i> back to UI's&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </form>
          </div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day1B: state.Day1B
}))(Day4);
