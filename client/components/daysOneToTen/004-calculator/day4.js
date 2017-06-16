import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';


class Day4 extends React.Component {

  showHome() {
    this.props.dispatch(actions.show_home());
  }

  showDay1b() {
    this.props.dispatch(actions.view_day_one_b());
  }

  render() { 
    return (
        <div className="Day4Div">
          <div className="calcDiv">
            <p>input field</p>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">C</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">/</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">x</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">m</button>

            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">7</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">8</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">9</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">-</button>

            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">4</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">5</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">6</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">+</button>

            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">1</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">2</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">3</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">()</button>

            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">0</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">.</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">+/-</button>
            <button className="calcBtn" onClick={this.handleClick} label="C" value="clear">=</button>             
          </div>
            <button className="Day1Btn" onClick={() => this.showHome()}><i className="fa fa-fw fa-chevron-left"></i> back to UI's&nbsp;&nbsp;&nbsp;&nbsp;</button>          
        </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome,
  Day1B: state.Day1B
}))(Day4);
