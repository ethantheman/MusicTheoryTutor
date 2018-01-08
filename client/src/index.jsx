import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import GrandStaff from './GrandStaff.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
		<div>
			<GrandStaff/>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));