import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import GrandStaff from './GrandStaff.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: ["D4"], // addNote button will append a new note to this array. will need some way to distinguish notes from each other...maybe change this to an object?
			selectedNote: "D4" // may need to refactor note selection to keep track of this in parent component...
		}
		this.changeNote=this.changeNote.bind(this);
	}

	changeNote(newNote) {
		// this function will be passed via props to the Note component
		// onSelect, the Note will execute the function and update the parent component state

		// will need some way of distinguishing between the notes in this.state.notes...
		// but just get this working for one note for now.

		this.setState({
			notes: [newNote]
		});
	}

	render() {
		return (
		<div>
			<GrandStaff changeNote={this.changeNote}/>
			<div className="noteNameContainer">
				<div className="noteName">{this.state.notes[0]}</div>
			</div>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));