import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';


class Day1 extends React.Component {

	showHome() {
		this.props.dispatch(actions.show_home());
	}

  render() { 
    return (
      <div className="PHONEDIV">
        <div className="Day1Div">
          <div className="input">
          	<form onSubmit={(e) => {
          		e.preventDefault() }}>
              <div className="day1input"><i className="fa fa-user"></i><input type="text" placeholder="Lulu Esquire" name="name" /></div>
          		<div className="day1input"><i className="fa fa-envelope"></i><input type="email" placeholder="lesquire@example.com" name="email" /></div>
          		<div className="day1input"><i className="fa fa-lock"></i><input type="password" placeholder="********" /></div>
              <button className="Day1Btn" type="submit">&nbsp;&nbsp;sign me up! <i className="fa fa-fw fa-chevron-right"></i></button>
              <button className="Day1Btn" onClick={() => this.showHome()}><i className="fa fa-fw fa-chevron-left"></i> back to UI's&nbsp;&nbsp;&nbsp;&nbsp;</button>
          	</form>
          </div>

        </div>
      </div>
    )
  }
}

export default connect((state, props) => ({
  dailyUIs: state.dailyUIs,  
  showHome: state.showHome
}))(Day1);
