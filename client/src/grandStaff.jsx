import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note.jsx';
import NoteNameDisplay from './NoteNameDisplay.jsx';
var Wad = require('web-audio-daw');


class GrandStaff extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
			{"name": "C4", "deleted": false},
			{"name": "E4", "deleted": false},
			{"name": "G4", "deleted": false}
			], // should initialize as empty array, use these for testing...
			selectedNotes: [], // initialize as empty array,
			notesToShow: []
		}
		this.changeNote=this.changeNote.bind(this);
		this.changeSelection=this.changeSelection.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
		this.playChord = this.playChord.bind(this);
		this.getNotesToShow = this.getNotesToShow.bind(this);
	}

	deleteNote(index) {
		// flip deleted flag
		let n = this.state.notes;
		n[index].deleted = true;
		this.setState({notes: n});

		let noteToDelete = this.state.notes[index].name;
		let found = this.state.notesToShow.indexOf(noteToDelete);
		if (found >= 0) {
			this.state.notesToShow.splice(found, 1);
			this.setState({
				notesToShow: this.state.notesToShow
			})
		}
	}

	changeNote(newNote, index) {
		// this function updates the note at parameter index.
		console.log('changing note: ', newNote, index);
		let n = this.state.notes;
		n[index] = {"name": newNote, "deleted": false};
		this.setState({
			notes: n,
			notesToShow: this.getNotesToShow()
		});
	}

	changeSelection(index, bool) {
		if ( bool ) {
			let s = this.state.selectedNotes;
			s.push(index);
			this.setState({
				selectedNotes: s
			}, () => {
				console.log(this.state.selectedNotes);
			});
		} else {
			let s = this.state.selectedNotes;
			let x = [];
			s.forEach(el => {
				el === index ? null : x.push(el);
			})
			this.setState({
				selectedNotes: x
			}, () => {
				console.log(this.state.selectedNotes);
			});
		}
	}

	playChord() {
		// use the web audio daw to play all the notes on the staff.
		let chord = [];
		this.state.notesToShow.forEach(note => {
			if ( obj.deleted === false ) {
				chord.push(obj.name);
			}
		});
		console.log(chord);
		let c = new Wad({source: 'triangle'});
		chord.forEach(note => {
			c.play({volume: 0.5, pitch: note});
		})
	}

	// checkNote(letter) {
	// 	// EDGE CASE TO WORK OUT LATER - WHAT IF TWO OF THE SAME NOTE ARE IN NOTES ARRAY?

	// 	let sharp = letter[0] + '#' + letter[1];
	// 	let natural = letter;
	// 	let flat = letter[0] + 'b' + letter[1];

	// 	// check if any version of note (sharp, natural or flat) is in notes array, if so render a Note object.
	// 	return this.props.notes.includes(natural) ? (<Note name={natural} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection} selectedNote={this.props.selectedNote}/>)
	// 	: this.props.notes.includes(sharp) ? (<Note name={sharp} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection} selectedNote={this.props.selectedNote}/>)
	// 	: this.props.notes.includes(flat) ? (<Note name={flat} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection} selectedNote={this.props.selectedNote}/>)
	// 	: null;
	// }

	componentWillMount() {
		this.setState({
			notesToShow: this.state.notes.map(obj => obj.name)
		});
	}

	getNotesToShow() {
		return this.state.notes.filter(note => note.deleted === false).map(obj => obj.name)
	}

	render() {
		return (
			<div>
				<div>
					<img src="images/treble.png" className="trebleClef"></img>
					<img src="images/Bass.png" className="bassClef"></img>
				</div>
				<div>
					{this.state.notes.map((note, i) => {return <Note name={note.name} key={i} index={i} changeSelection={this.changeSelection} changeNote={this.changeNote} deleteNote={this.deleteNote}/>})}
					<div className="space" id="g5"></div>
					<div className="line" id="f5"></div>
					<div className="space" id="e5"></div>
					<div className="line" id="d5"></div>
					<div className="space" id="c5"></div>
					<div className="line" id="b4"></div>
					<div className="space" id="a4"></div>
					<div className="line" id="g4"></div>
					<div className="space" id="f4"></div>
					<div className="line" id="e4"></div>
					<div className="space" id="d4"></div>
					<div className="ledger-line" id="c4"></div>
					<div className="space" id="b3"></div>
					<div className="line" id="a3"></div>
					<div className="space" id="g3"></div>
					<div className="line" id="f3"></div>
					<div className="space" id="e3"></div>
					<div className="line" id="d3"></div>
					<div className="space" id="c3"></div>
					<div className="line" id="b2"></div>
					<div className="space" id="a2"></div>
					<div className="line" id="g2"></div>
					<div className="space" id="f2"></div>
				</div>
				{this.state.notesToShow.map((name, i) => { return <NoteNameDisplay name={name} key={i}/> })}
				<div className="playButtonContainer"><button id="playButton" onClick={this.playChord}>Play your chord!</button></div>
			</div>
			);
	}
}

export default GrandStaff;