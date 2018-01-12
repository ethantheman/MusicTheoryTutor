import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import GrandStaff from './GrandStaff.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	getCursorPosition(e) {
		// use the coordinates clicked to lookup which div was clicked
		// console.log('click! x: ', e.pageX, 'y: ', e.pageY);
	}
	
	render() {
		// console.log('notes: ', this.state.notes, 'selected notes: ', this.state.selectedNotes);
		return (
		<div onClick={this.getCursorPosition}>
			<div>
				<h1>Ethan's Chord Builder</h1>
			</div>
			<br/>
			<GrandStaff/>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));