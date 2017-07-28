import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysOnes2 extends React.Component {

  dayOne() {
    this.props.dispatch(actions.view_day_one());
  }

  dayTwo() {
    this.props.dispatch(actions.view_day_two());
  }

  dayThree() {
    this.props.dispatch(actions.view_day_three());
  }

  dayFive() {
    this.props.dispatch(actions.view_day_five());
  }

  daySix() {
    this.props.dispatch(actions.view_day_six());
  }

  dayEight() {
    this.props.dispatch(actions.view_day_eight());
  }

  render() {
    return (
      <div className="tenButtons2">
        <ul>
          <button onClick={() => this.dayOne()}>DailyUI 001 - "Sign-up"</button>
          <button onClick={() => this.dayTwo()}>DailyUI 002 - "Checkout"</button>
          <button onClick={() => this.dayThree()}>DailyUI 003 - "Landing Page"</button>
          <button onClick={() => this.dayFive()}>DailyUI 005 - "App Icon"</button>
          <button onClick={() => this.daySix()}>DailyUI 006 - "User Profile"</button>
          <button onClick={() => this.dayEight()}>DailyUI 008 - "404 Page"</button>
        </ul>

      </div>

    )
  }
}

export default connect((state, props) => ({
  showHome: state.showHome,
}))(DaysOnes2);
