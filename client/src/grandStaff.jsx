import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note.jsx';
import $ from 'jquery';

class GrandStaff extends React.Component {
	constructor(props) {
		super(props);
		// this.mapNotes=this.mapNotes.bind(this);
		this.checkNote=this.checkNote.bind(this);
	}

	// mapNotes() {
	// 	// <Note changeNote={this.props.changeNote} changeSelection={this.props.changeSelection}/>
	// 	// use $ to get the div each note in this.props.notes should be appended to.
	// 	this.props.notes.map(note => {
	// 		// console.log(note.toLowerCase());
	// 		let $note = `<Note name={note.toLowerCase()} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection}/>`;
	// 		let $parent = $('#'+note.toLowerCase());
	// 		$parent.append($note);
	// 		console.log($parent);
	// 		return $parent;
	// 	});
	// }
	checkNote(letter) {
		let sharp = letter[0] + '#' + letter[1];
		let natural = letter;
		let flat = letter[0] + 'b' + letter[1];
		
		// check if any version of note (sharp, natural or flat) is in notes array, if so render a Note object.
		return this.props.notes.includes(natural) ? (<Note name={natural} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection}/>) 
		: this.props.notes.includes(sharp) ? (<Note name={sharp} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection}/>)
		: this.props.notes.includes(flat) ? (<Note name={flat} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection}/>)
		: null;
	}

	render() {
		return (
			<div>
				<div>
					<img src="images/treble.png" className="trebleClef"></img>
					<img src="images/Bass.png" className="bassClef"></img>
				</div>
				<div>
					<div className="space" id="g5">{this.checkNote('G5')}</div>
					<div className="line" id="f5">{this.checkNote('F5')}</div>
					<div className="space" id="e5">{this.checkNote('E5')}</div>
					<div className="line" id="d5">{this.checkNote('D5')}</div>
					<div className="space" id="c5">{this.checkNote('C5')}</div>
					<div className="line" id="b4">{this.checkNote('B4')}</div>
					<div className="space" id="a4">{this.checkNote('A4')}</div>
					<div className="line" id="g4">{this.checkNote('G4')}</div>
					<div className="space" id="f4">{this.checkNote('F4')}</div>
					<div className="line" id="e4">{this.checkNote('E4')}</div>
					<div className="space" id="d4">{this.checkNote('E4')}</div>
					<div className="ledger-line" id="c4">{this.checkNote('C4')}</div>
					<div className="space" id="b3">{this.checkNote('B3')}</div>
					<div className="line" id="a3">{this.checkNote('A3')}</div>
					<div className="space" id="g3">{this.checkNote('G3')}</div>
					<div className="line" id="f3">{this.checkNote('F3')}</div>
					<div className="space" id="e3">{this.checkNote('E3')}</div>
					<div className="line" id="d3">{this.checkNote('D3')}</div>
					<div className="space" id="c3">{this.checkNote('C3')}</div>
					<div className="line" id="b2">{this.checkNote('B2')}</div>
					<div className="space" id="a2">{this.checkNote('A2')}</div>
					<div className="line" id="g2">{this.checkNote('G2')}</div>
					<div className="space" id="f2">{this.checkNote('F2')}</div>
				</div>
			</div>
			);
	}
}

export default GrandStaff;