import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import DaysOnes from './daysOnes';
import DaysTeens from './daysTeens';
import DaysTwenties from './daysTwenties';
import DaysThirties from './daysThirties';
import DaysForties from './daysForties';
import DaysFifties from './daysFifties';
import DaysSixties from './daysSixties';
import DaysSeventies from './daysSeventies';
import DaysEighties from './daysEighties';
import DaysNineties from './daysNineties';

import Day1Container from './daysOneToTen/001-sign-up/day1container';
import Day2Container from './daysOneToTen/002-checkout/day2container';
import Day3Container from './daysOneToTen/003-landing-page/day3container';
import Day4Container from './daysOneToTen/004-calculator/day4container';
import Day5Container from './daysOneToTen/005-app-icon/day5container';
import Day6Container from './daysOneToTen/006-user-profile/day6container';

class Home extends React.Component {

  render() {
    if (this.props.showHome) {
      return (
        <div>
          <h1>welcome to the daily ui</h1>
          <div className="dailyUIs">

            <div className="days-by-tens">
              <DaysOnes />
            </div>
            <div className="days-by-tens">
              <DaysTeens />
            </div>
            <div className="days-by-tens">
              <DaysTwenties />
            </div>
            <div className="days-by-tens">
              <DaysThirties />
            </div>
            <div className="days-by-tens">
              <DaysForties />
            </div>
            <div className="days-by-tens">
              <DaysFifties />
            </div>
            <div className="days-by-tens">
              <DaysSixties />
            </div>
            <div className="days-by-tens">
              <DaysSeventies />
            </div>
            <div className="days-by-tens">
              <DaysEighties />
            </div>
            <div className="days-by-tens">
              <DaysNineties />
            </div> 
          </div>
        </div>
        )
      } else if (this.props.dailyUIs[0]) {
        return (
          <div>
            <Day1Container />
          </div>
        )
      } else if (this.props.dailyUIs[1]) {
        return (
          <div>
            <Day2Container />
          </div>
        )
      } else if (this.props.dailyUIs[2]) {
        return (
          <div>
            <Day3Container />
          </div>
        )
      } else if (this.props.dailyUIs[3]) {
        return (
          <div>
            <Day4Container />
          </div>
        )
      } else if (this.props.dailyUIs[4]) {
        return (
          <div>
            <Day5Container />
          </div>
        )
      } else if (this.props.dailyUIs[5]) {
        return (
          <div>
            <Day6Container />
          </div>
        )
      }
    }
  }


export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,
  showHome: state.showHome
}))(Home);