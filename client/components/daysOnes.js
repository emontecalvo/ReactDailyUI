import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysOnes extends React.Component {

  dayOne() {
    this.props.dispatch(actions.view_day_one());
  }

  dayTwo() {
    this.props.dispatch(actions.view_day_two());
  }

  dayThree() {
    this.props.dispatch(actions.view_day_three());
  }

  dayFour() {
    this.props.dispatch(actions.view_day_four());
  }

  render() {
    return (
      <div>
        <h3>Day 001-010 </h3>
        <ul>
          <button onClick={() => this.dayOne()}>DailyUI 001 - "Sign-up"</button>
          <button onClick={() => this.dayTwo()}>DailyUI 002 - "Checkout"</button>
          <button onClick={() => this.dayThree()}>DailyUI 003 - "Landing Page"</button>
          <button onClick={() => this.dayFour()}>DailyUI 004 - "Calculator"</button>
          <button>DailyUI 005 - "App Icon"</button>
          <button>DailyUI 006 - "User Profile"</button>
          <button>DailyUI 007 - "Settings"</button>
          <button>DailyUI 008 - "404 Page"</button>
          <button>DailyUI 009 - "Music Player"</button>
          <button>DailyUI 010 - "Social Share"</button>
        </ul>

      </div>

    )
  }
}

export default connect((state, props) => ({
  showHome: state.showHome,
}))(DaysOnes);
