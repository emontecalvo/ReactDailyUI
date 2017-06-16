import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';


class Day2c extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  render() { 
    return (
        <div className="Day2Div">
          <div className="input">
            <br />
            <br />
            <br />
            <h2>thank you for your order!</h2>
            <br />
            <h3><strong>order # 123456C</strong></h3>
            <br />
            <h3>linda's fancy shoppe</h3>
            <br />
            <br />
            <button className="Day2Btn" onClick={() => this.showHome()}><i className="fa fa-fw fa-chevron-left"></i> back to UI's&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day2A: state.Day2A,
  Day2B: state.Day2B,
  Day2C: state.Day2C
}))(Day2c);
