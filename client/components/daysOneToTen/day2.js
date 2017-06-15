import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';


class Day2 extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  showDay2b() {
    this.props.dispatch(actions.view_day_two_b());
  }

  render() { 
    return (
        <div className="Day2Div">
          <div className="input">
          <h2>linda's fancy shoppe</h2>
          <h3>cookie order</h3>
          <p>1 chocolate chip stack(s) (8 cookies)</p>
          <p><strong>total:  $13.97</strong></p>
            <form onSubmit={(e) => {
              e.preventDefault() }}>
              <div className="day2input_long"><i className="fa fa-user"></i><input type="text" placeholder="name on credit card" name="name" /></div>
              <div className="day2input_long"><i className="fa fa-credit-card"></i><input type="text" placeholder="0000 0000 0000 0000" name="cc_number" /></div>
              <div className="day2input_short"><i className="fa fa-calendar"></i><input type="text" placeholder="00 / 00" name="expiration" /> <i className="fa fa-lock"></i><input type="text" placeholder="csv" name="csv" /></div>
              <button className="Day2Btn" type="submit" onClick={() => this.showDay2b()}>&nbsp;&nbsp;next <i className="fa fa-fw fa-chevron-right"></i></button>
              <button className="Day2Btn" onClick={() => this.showHome()}><i className="fa fa-fw fa-chevron-left"></i> back to UI's&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </form>
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
}))(Day2);