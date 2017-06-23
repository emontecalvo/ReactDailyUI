import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class DaysEighties extends React.Component {

  render() { 
    return (
      <div className="tenButtons">
        <h3>Day 081-090 </h3>
        <ul>
          <button>DailyUI 081 - "Status Update"</button>
          <button>DailyUI 082 - "Form"</button>
          <button>DailyUI 083 - "Button"</button>
          <button>DailyUI 084 - "Badge"</button>
          <button>DailyUI 085 - "Pagination"</button>
          <button>DailyUI 086 - "Progress Bar"</button>
          <button>DailyUI 087 - "Tool-tip"</button>
          <button>DailyUI 088 - "Avatar"</button>
          <button>DailyUI 089 - "Terms-of-Service"</button>
          <button>DailyUI 090 - "Create-new"</button>
        </ul>

      </div>

    )
  }
}


export default DaysEighties;