import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/home';
import Home2 from './components/home2';
import store from './store';
import {Provider} from 'react-redux';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Provider store={store}>
		<Home2 />
	</Provider>, document.getElementById('app'))
);
