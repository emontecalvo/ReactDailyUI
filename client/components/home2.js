import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import DaysOnes2 from './daysOnes2';

import Day1Container from './daysOneToTen/001-sign-up/day1container';
import Day2Container from './daysOneToTen/002-checkout/day2container';
import Day3Container from './daysOneToTen/003-landing-page/day3container';
import Day5Container from './daysOneToTen/005-app-icon/day5container';
import Day6Container from './daysOneToTen/006-user-profile/day6container';
import Day8Container from './daysOneToTen/008-404/day8container';


class Home2 extends React.Component {

  render() {
    if (this.props.showHome) {
      return (
        <div>
          <h1>welcome to the daily ui:</h1>
          <div className="dailyUIs">

            <div className="days-by-tens">
              <DaysOnes2 />
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
      } else if (this.props.dailyUIs[7]) {
        return (
          <div>
            <Day8Container />
          </div>
        )
      }
    }
  }


export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,
  showHome: state.showHome
}))(Home2);