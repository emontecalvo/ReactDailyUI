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

// import Day1 from './daysOneToTen/day1';
import Day1Container from './daysOneToTen/day1container';
import Day2Container from './daysOneToTen/day2container';

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
      }
    }
  }


export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,
  showHome: state.showHome
}))(Home);