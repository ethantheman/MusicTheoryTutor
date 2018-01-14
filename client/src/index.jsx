import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import GrandStaff from './GrandStaff.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		// console.log('notes: ', this.state.notes, 'selected notes: ', this.state.selectedNotes);
		return (
		<div>
			<div>
				<h1 id="title">Ethan's Chord Builder</h1>
			</div>
			<br/>
			<GrandStaff/>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));