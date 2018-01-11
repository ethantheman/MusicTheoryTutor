import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import GrandStaff from './GrandStaff.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: ["G2", "F3", "Ab3", "E4", "B4"], // should initialize as empty array, use these for testing...
			selectedNotes: [] // initialize as empty array
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
	// 	oldNotes.push(newNote);
	// 	this.setState({
	// 		notes: oldNotes
	// 	});
	// }

	changeSelection(index, bool) {
		if ( bool ) {
			console.log('adding note to selectedNotes.');
			let s = this.state.selectedNotes;
			s.push(this.state.notes[index]);
			this.setState({
				selectedNotes: s
			}, () => {
				console.log(this.state.selectedNotes);
			});
		} else {
			console.log('removing note from selectedNotes.');
			let s = this.state.selectedNotes;
			let x = [];
			s.forEach(el => {
				el === this.state.notes[index] ? null : x.push(el);
			})
			this.setState({
				selectedNotes: x
			}, () => {
				console.log(this.state.selectedNotes);
			});
		}
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
				<h1>Ethan's Chord Builder</h1>
			</div>
			<br/>
			<GrandStaff notes={this.state.notes} changeNote={this.changeNote} changeSelection={this.changeSelection} selectedNotes={this.state.selectedNotes}/>
			{this.state.notes.map((note, i) => {
				return (<div className="noteNameContainer" key={i}>
									<div className="noteName">{note}</div>
								</div>)
			})}
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));