import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysTeens extends React.Component {

  render() { 
    return (
      <div className="tenButtons">
        <h3>Day 011-020 </h3>
        <ul>
          <button>DailyUI 011 - "Flash-Error-Success"</button>
          <button>DailyUI 012 - "Shopping"</button>
          <button>DailyUI 013 - "Direct Messaging"</button>
          <button>DailyUI 014 - "Countdown Timer"</button>
          <button>DailyUI 015 - "On-Off Switch"</button>
          <button>DailyUI 016 - "Pop-up"</button>
          <button>DailyUI 017 - "Email Receipt"</button>
          <button>DailyUI 018 - "Analytics"</button>
          <button>DailyUI 019 - "Leaderboard"</button>
          <button>DailyUI 020 - "Location Tracker"</button>
        </ul>

      </div>

    )
  }
}


export default DaysTeens;