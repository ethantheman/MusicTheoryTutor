import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note.jsx';
import $ from 'jquery';

class GrandStaff extends React.Component {
	constructor(props) {
		super(props);
		this.checkNote=this.checkNote.bind(this);
	}

	checkNote(letter) {
		// EDGE CASE TO WORK OUT LATER - WHAT IF TWO OF THE SAME NOTE ARE IN NOTES ARRAY?

		let sharp = letter[0] + '#' + letter[1];
		let natural = letter;
		let flat = letter[0] + 'b' + letter[1];
		
		// check if any version of note (sharp, natural or flat) is in notes array, if so render a Note object.
		return this.props.notes.includes(natural) ? (<Note name={natural} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection} selectedNote={this.props.selectedNote}/>) 
		: this.props.notes.includes(sharp) ? (<Note name={sharp} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection} selectedNote={this.props.selectedNote}/>)
		: this.props.notes.includes(flat) ? (<Note name={flat} changeNote={this.props.changeNote} changeSelection={this.props.changeSelection} selectedNote={this.props.selectedNote}/>)
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
					{this.props.notes.map((note, i) => {return <Note name={note} key={i} index={i} changeSelection={this.props.changeSelection} changeNote={this.props.changeNote} deleteNote={this.props.deleteNote}/>})}
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
			</div>
			);
	}
}

export default GrandStaff;