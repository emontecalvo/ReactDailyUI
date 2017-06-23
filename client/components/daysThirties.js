import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysThirties extends React.Component {

  render() { 
    return (
      <div className="tenButtons">
        <h3>Day 031-040 </h3>
        <ul>
          <button>DailyUI 031 - "File Upload"</button>
          <button>DailyUI 032 - "Crowd Fund"</button>
          <button>DailyUI 033 - "Customize"</button>
          <button>DailyUI 034 - "Car Dashboard"</button>
          <button>DailyUI 035 - "Blog"</button>
          <button>DailyUI 036 - "Special Offer"</button>
          <button>DailyUI 037 - "Weather"</button>
          <button>DailyUI 038 - "Calendar"</button>
          <button>DailyUI 039 - "Testimonial"</button>
          <button>DailyUI 040 - "Recipe"</button>
        </ul>

      </div>

    )
  }
}


export default DaysThirties;