import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import GrandStaff from './GrandStaff.jsx';
let chromatic = require('./chromatic.js').chromatic;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: ["c4"], // addNote button will append a new note to this array. max of two for now.
			selectedNote: "c4" // may need to refactor note selection to keep track of this in parent component...
		}

	}

	render() {
		return (
		<div>
			<GrandStaff chromatic={chromatic}/>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));