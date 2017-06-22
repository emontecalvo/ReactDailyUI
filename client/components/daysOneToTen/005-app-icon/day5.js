import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';


class Day5 extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  render() { 
    return (
        <div>
          <div className="Day5Div">
            <div className="Day5Img">
            </div>
          </div>
          <div className="Day3BtnDiv">
            <button className="Day3Btn" type="submit" onClick={() => this.showHome()}>back to Daily UI's</button>
          </div>
        </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
}))(Day5);
