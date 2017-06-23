import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysForties extends React.Component {

  render() { 
    return (
      <div className="tenButtons">
        <h3>Day 041-050 </h3>
        <ul>
          <button>DailyUI 041 - "Workout Tracker"</button>
          <button>DailyUI 042 - "To-Do List"</button>
          <button>DailyUI 043 - "Food-Drink Menu"</button>
          <button>DailyUI 044 - "Favorites"</button>
          <button>DailyUI 045 - "Info-card"</button>
          <button>DailyUI 046 - "Invoice"</button>
          <button>DailyUI 047 - "Activity Feed"</button>
          <button>DailyUI 048 - "Coming Soon"</button>
          <button>DailyUI 049 - "Notification"</button>
          <button>DailyUI 050 - "Job Listing"</button>
        </ul>

      </div>

    )
  }
}


export default DaysForties;