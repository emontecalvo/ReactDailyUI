import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysNineties extends React.Component {

  render() { 
    return (
      <div className="tenButtons">
        <h3>Day 091-100 </h3>
        <ul>
          <button>DailyUI 091 - "Curated for you"</button>
          <button>DailyUI 092 - "FAQ"</button>
          <button>DailyUI 093 - "Splash-screen"</button>
          <button>DailyUI 094 - "News"</button>
          <button>DailyUI 095 - "Product Tour"</button>
          <button>DailyUI 096 - "Currently In-stock"</button>
          <button>DailyUI 097 - "Giveaway"</button>
          <button>DailyUI 098 - "Advertisement"</button>
          <button>DailyUI 099 - "Categories"</button>
          <button>DailyUI 100 - "Redesign Daily UI landing page"</button>
        </ul>

      </div>

    )
  }
}


export default DaysNineties;