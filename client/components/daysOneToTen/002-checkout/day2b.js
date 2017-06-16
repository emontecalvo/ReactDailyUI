import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';


class Day2b extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  showDay2c() {
    this.props.dispatch(actions.view_day_two_c());
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
              <div className="day2input_long"><i className="fa fa-user"></i><input type="text" placeholder="name of recipient" name="name" /></div>
              <div className="day2input_long"><i className="fa fa-home"></i><input type="text" placeholder="street address" name="address" /></div>
              <div className="day2input_short"><i className="fa fa-globe"></i><input type="text" placeholder="state" name="state" /> <i className="fa fa-globe"></i><input type="text" placeholder="zip" name="zipcode" /></div>
              <button className="Day2Btn" type="submit" onClick={() => this.showDay2c()}>&nbsp;&nbsp;place order <i className="fa fa-fw fa-chevron-right"></i></button>
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
}))(Day2b);
