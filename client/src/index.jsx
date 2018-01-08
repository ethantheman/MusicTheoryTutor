import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
		<div>
			<p>Hello, world!</p>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));