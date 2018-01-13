import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note.jsx';
import NoteNameDisplay from './NoteNameDisplay.jsx';
import IntervalDisplay from './IntervalDisplay.jsx';
import $ from 'jquery';
var Wad = require('web-audio-daw');

class GrandStaff extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [], // should initialize as empty array, use these for testing...
			selectedNotes: [],
			notesToDisplay: [],
			intervalToDisplay: []
		}
		this.changeNote = this.changeNote.bind(this);
		this.changeSelection = this.changeSelection.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
		this.playChord = this.playChord.bind(this);
		this.getNotesToDisplay = this.getNotesToDisplay.bind(this);
		this.addNote = this.addNote.bind(this);
		this.addNoteToInterval = this.addNoteToInterval.bind(this);
	}

	addNoteToInterval(note, cb) {
		// only add the note if it's not already in array. if it is already in the array, remove it.
		// cb from child updates noteNameDisplay state to paint border red when it is selected.
		let a = this.state.intervalToDisplay;
		if ( a.includes(note) ) {
			a.splice(a.indexOf(note), 1);
			this.setState({intervalToDisplay: a}, cb(false));
		} else {
			if ( a.length < 2 ) { // only two notes should be in array at a time.
				a.push(note);
				this.setState({intervalToDisplay: a}, cb(true));
			} else {
				alert('you must remove a note from the interval before adding another.');
			}
		}
	}

	addNote(e) {
		let newNote = {"name": e.target.id.toUpperCase(), "deleted": false};
		this.state.notes.push(newNote);
		this.state.notesToDisplay.push(newNote.name);
		this.setState({
			notes: this.state.notes,
			notesToDisplay: this.state.notesToDisplay
		});
	}

	deleteNote(index) {

		// flip deleted flag on note at index
		let n = this.state.notes;
		n[index].deleted = true;
		this.setState({notes: n});

		// remove note from notesToDisplay
		let noteToDelete = this.state.notes[index].name;
		let found = this.state.notesToDisplay.indexOf(noteToDelete);
		if (found >= 0) {
			this.state.notesToDisplay.splice(found, 1);
			this.setState({
				notesToDisplay: this.state.notesToDisplay
			});
		}
	}

	changeNote(oldNote, newNote, index) {
		// this function updates the note at parameter index.
		console.log('changing note from ', oldNote, 'to: ', newNote, index);
		let n = this.state.notes;
		n[index].deleted === false ? n[index] = {"name": newNote, "deleted": false} : console.log('you already deleted this note!');
		this.setState({
			notes: n
		}, () => {
			this.setState({
				notesToDisplay: this.getNotesToDisplay()
			}, () => { // update interval display if necessary:
				if ( this.state.intervalToDisplay.includes(oldNote) ) {
					this.state.intervalToDisplay[this.state.intervalToDisplay.indexOf(oldNote)] = newNote;
					this.setState({intervalToDisplay: this.state.intervalToDisplay});
				}
			});
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
		this.state.notes.forEach(obj => {
			if ( obj.deleted === false ) {
				chord.push(obj.name);
			}
		});
		console.log(chord);
		let c = new Wad({source: 'sine'});
		chord.forEach(note => {
			c.play({volume: 0.5, pitch: note});
		})
	}

	componentWillMount() {
		this.setState({
			notesToDisplay: this.state.notes.map(obj => obj.name)
		});
	}

	getNotesToDisplay() {
		return this.state.notes.filter(note => note.deleted === false).map(obj => obj.name)
	}

	render() {
		console.log('interval: ', this.state.intervalToDisplay);
		return (
			<div>
				<div>
					<img src="images/treble.png" className="trebleClef"></img>
					<img src="images/Bass.png" className="bassClef"></img>
				</div>
				<div>
					{this.state.notes.map((note, i) => {return <Note name={note.name} key={i} index={i} changeSelection={this.changeSelection} changeNote={this.changeNote} deleteNote={this.deleteNote}/>})}
					<div className="ledger-line" id="a5" onClick={this.addNote}></div>
					<div className="space" id="g5" onClick={this.addNote}></div>
					<div className="line" id="f5" onClick={this.addNote}></div>
					<div className="space" id="e5" onClick={this.addNote}></div>
					<div className="line" id="d5" onClick={this.addNote}></div>
					<div className="space" id="c5" onClick={this.addNote}></div>
					<div className="line" id="b4" onClick={this.addNote}></div>
					<div className="space" id="a4" onClick={this.addNote}></div>
					<div className="line" id="g4" onClick={this.addNote}></div>
					<div className="space" id="f4" onClick={this.addNote}></div>
					<div className="line" id="e4" onClick={this.addNote}></div>
					<div className="space" id="d4" onClick={this.addNote}></div>
					<div className="ledger-line" id="c4" onClick={this.addNote}></div>
					<div className="space" id="b3" onClick={this.addNote}></div>
					<div className="line" id="a3" onClick={this.addNote}></div>
					<div className="space" id="g3" onClick={this.addNote}></div>
					<div className="line" id="f3" onClick={this.addNote}></div>
					<div className="space" id="e3" onClick={this.addNote}></div>
					<div className="line" id="d3" onClick={this.addNote}></div>
					<div className="space" id="c3" onClick={this.addNote}></div>
					<div className="line" id="b2" onClick={this.addNote}></div>
					<div className="space" id="a2" onClick={this.addNote}></div>
					<div className="line" id="g2" onClick={this.addNote}></div>
					<div className="space" id="f2" onClick={this.addNote}></div>
					<div className="ledger-line" id="e2" onClick={this.addNote}></div>
				</div>
				{this.state.notesToDisplay.map((name, i) => { return <NoteNameDisplay name={name} key={i} addToInterval={this.addNoteToInterval}/> })}
				<div className="playButtonContainer"><button id="playButton" onClick={this.playChord}>Play your chord!</button></div>
				<IntervalDisplay interval={this.state.intervalToDisplay}/>
			</div>
			);
	}
}

export default GrandStaff;