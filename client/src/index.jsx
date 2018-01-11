import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import GrandStaff from './GrandStaff.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: ["C4"], // addNote button will append a new note to this array. will need some way to distinguish notes from each other...maybe change this to an object?
			selectedNote: "C4" // may need to refactor note selection to keep track of this in parent component...
		}
		this.changeNote=this.changeNote.bind(this);
		this.getCursorPosition=this.getCursorPosition.bind(this);
		this.addNote=this.addNote.bind(this);
	}

	getCursorPosition(e) {
		// use the coordinates clicked to lookup which div was clicked
		console.log('click! x: ', e.pageX, 'y: ', e.pageY);
	}

	addNote(newNote) {
		// eventually, get newNote using getCursorPosition
		let oldNotes = this.state.notes;
		oldNotes.push("C4");
		this.setState({
			notes: oldNotes
		});
	}

	changeNote(newNote, index) {
		// this function will be passed via props to the Note component
		// onSelect, the Note will execute the function and update the parent component state

		this.setState({
			notes: [newNote]
		});
	}

	render() {
		return (
		<div onClick={this.getCursorPosition}>
			<div>
				<h1>Interval Buddy</h1>
			</div>
			<br/>
			<GrandStaff changeNote={this.changeNote} notes={this.state.notes}/>
			<div className="noteNameContainer">
				<div className="noteName">{this.state.notes[0]}</div>
			</div>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));