import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysSixties extends React.Component {

  render() { 
    return (
      <div className="tenButtons">
        <h3>Day 061-070 </h3>
        <ul>
          <button>DailyUI 061 - "Redeem Coupon"</button>
          <button>DailyUI 062 - "Workout of the Day"</button>
          <button>DailyUI 063 - "Best-Of-2015"</button>
          <button>DailyUI 064 - "Select User Type"</button>
          <button>DailyUI 065 - "Notes-Widget"</button>
          <button>DailyUI 066 - "Statistics"</button>
          <button>DailyUI 067 - "Hotel Booking"</button>
          <button>DailyUI 068 - "Flight Search"</button>
          <button>DailyUI 069 - "Trending"</button>
          <button>DailyUI 070 - "Event Listing"</button>
        </ul>

      </div>

    )
  }
}


export default DaysSixties;