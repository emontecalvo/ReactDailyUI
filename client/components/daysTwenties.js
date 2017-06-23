import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysTwenties extends React.Component {

  render() { 
    return (
      <div className="tenButtons">
        <h3>Day 021-030 </h3>
        <ul>
          <button>DailyUI 021 - "Home Monitor"</button>
          <button>DailyUI 022 - "Search"</button>
          <button>DailyUI 023 - "Onboarding"</button>
          <button>DailyUI 024 - "Boarding Pass"</button>
          <button>DailyUI 025 - "TV-app"</button>
          <button>DailyUI 026 - "Subscribe"</button>
          <button>DailyUI 027 - "Dropdown"</button>
          <button>DailyUI 028 - "Contact Us"</button>
          <button>DailyUI 029 - "Map"</button>
          <button>DailyUI 030 - "Pricing"</button>
        </ul>

      </div>

    )
  }
}


export default DaysTwenties;