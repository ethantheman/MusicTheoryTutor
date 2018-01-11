import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import GrandStaff from './GrandStaff.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: ["C4", "F#4", "Eb5", "G#2", "Ab3"], // addNote button will append a new note to this array. will need some way to distinguish notes from each other...maybe change this to an object?
			selectedNote: "C4" // may need to refactor note selection to keep track of this in parent component...
		}
		this.changeNote=this.changeNote.bind(this);
		this.getCursorPosition=this.getCursorPosition.bind(this);
		// this.addNote=this.addNote.bind(this);
		this.changeSelection=this.changeSelection.bind(this);
	}

	getCursorPosition(e) {
		// use the coordinates clicked to lookup which div was clicked
		// console.log('click! x: ', e.pageX, 'y: ', e.pageY);
	}

	// addNote(newNote) {
	// 	// eventually, get newNote using getCursorPosition
	// 	let oldNotes = this.state.notes;
	// 	oldNotes.push("C4");
	// 	this.setState({
	// 		notes: oldNotes
	// 	});
	// }

	changeSelection(name) {
		let i = this.state.notes.indexOf(name);
		console.log('changing selection!', i);
		this.setState({
			selectedNote: i === -1 ? null : i
		});
	}

	changeNote(newNote, index) {
		console.log('changing note');
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
			<GrandStaff changeNote={this.changeNote} notes={this.state.notes} changeSelection={this.changeSelection} selectedNote={this.state.selectedNote}/>
			<div className="noteNameContainer">
				<div className="noteName">{this.state.notes[0]}</div>
			</div>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));