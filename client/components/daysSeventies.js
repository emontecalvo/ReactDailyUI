import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysSeventies extends React.Component {

  render() { 
    return (
      <div className="tenButtons">
        <h3>Day 071-080 </h3>
        <ul>
          <button>DailyUI 071 - "Schedule"</button>
          <button>DailyUI 072 - "Image Slider"</button>
          <button>DailyUI 073 - "Virtual Reality"</button>
          <button>DailyUI 074 - "Download App"</button>
          <button>DailyUI 075 - "Pre-order"</button>
          <button>DailyUI 076 - "Loading"</button>
          <button>DailyUI 077 - "Thank-you"</button>
          <button>DailyUI 078 - "Pending Invitation"</button>
          <button>DailyUI 079 - "Itinerary"</button>
          <button>DailyUI 080 - "Date-picker"</button>
        </ul>

      </div>

    )
  }
}


export default DaysSeventies;