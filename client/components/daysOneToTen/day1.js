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
              <input type="text" placeholder="name" name="name" />
          		<input type="email" placeholder="email" name="email" />
          		<input type="password" placeholder="password" />
          		<button type="submit">sign me up!</button>
              <button className="Day1Btn" onClick={() => this.showHome()}>back to all UI's</button>
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
