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
		this.selectNote = this.selectNote.bind(this);
	}

	selectNote(e) {
		e.preventDefault();
		console.log('click');
	}

	render() {
		return (
		<div>
			<GrandStaff selectNote={this.selectNote}/>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));