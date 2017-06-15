import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';


class Day3 extends React.Component {

  showDay3b() {
    this.props.dispatch(actions.view_day_three_b());
  }

  render() { 
    return (
        <div>
          <div className="Day3Div">
            <p>perfect staycation.</p>
            <p>perfect coffee.</p>
          </div>
          <div className="Day3BtnDiv">
            <button className="Day3Btn" type="submit" onClick={() => this.showDay3b()}>learn more about coffeeTrés</button>
          </div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day3A: state.Day3A,
  Day3B: state.Day3B
}))(Day3);