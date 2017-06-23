import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysFifties extends React.Component {

  render() { 
    return (
      <div className="tenButtons">
        <h3>Day 051-060 </h3>
        <ul>
          <button>DailyUI 051 - "Press-page"</button>
          <button>DailyUI 052 - "Logo Design"</button>
          <button>DailyUI 053 - "Header Navigation"</button>
          <button>DailyUI 054 - "Confirmation"</button>
          <button>DailyUI 055 - "Icon Set"</button>
          <button>DailyUI 056 - "Breadcrumbs"</button>
          <button>DailyUI 057 - "Video Player"</button>
          <button>DailyUI 058 - "Shopping Cart"</button>
          <button>DailyUI 059 - "Background Platform"</button>
          <button>DailyUI 060 - "Color Picker"</button>
        </ul>

      </div>

    )
  }
}


export default DaysFifties;