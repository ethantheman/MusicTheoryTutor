import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Accidental from './Accidental.jsx';
let chromatic = require('./chromatic.js').chromatic;

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			currentIndex: 19, // this should eventually be set to default at middle C (index 17)
			currentNote: "D4" // need to keep track of this in order to update accidental.
		}
		this.select = this.select.bind(this);
		this.getNextNote = this.getNextNote.bind(this);
		this.moveNote = this.moveNote.bind(this);
		this.getAccidental = this.getAccidental.bind(this);
	}

	getAccidental(noteName) {
		// look for a # or b in the note name at index 1
		if ( noteName[1] === "#" ) {
			return "sharp";
		} else if ( noteName[1] === "b" ) {
				return "flat";
			}

		return "";
	}

	moveNote(direction) {
		// this function is now working as far as moving the note and the accidental at the same time and keeping them in the same div.
		// now realizing that the notes should be appended to the GrandStaff, not the Treble Clef or Bass Clef. Might be best
		// to remove the treble/bass clef components all together and just use grandstaff.

		let $child = $('.noteAndAccidentalContainer');
		let $parent = $child.parent();
		if ( direction === "up" ) {
			// get div above $parent
			let $above = $parent.prev();
			// remove note/accidental from $parent and append to $below
			$child.remove();
			$above.append($child);
		}
		if ( direction === "down" ) {
			// get div below $parent
			let $below = $parent.next();
			// remove note/accidental from $parent and append to $below
			$child.remove();
			$below.append($child);
		}
		
	}

	getNextNote(direction) {
		let c = this.state.currentIndex;
		if ( direction === 'up' && chromatic[c + 1] ) {
			let newNote = chromatic[c + 1][0];
			this.setState({
				currentIndex: c + 1,
				currentNote: newNote
			});
			this.moveNote("up"); // NOTE FOR LATER: SHOULD ONLY MOVE IF THE LETTER CHANGES
			return chromatic[c + 1][0]; // first el in tuple is the ascending enharmonic name.
		} else if (direction === 'down' && chromatic[c - 1]) {
			let newNote = chromatic[c - 1][1];
			this.setState({
				currentIndex: c - 1,
				currentNote: newNote
			});
			this.moveNote("down"); // NOTE FOR LATER: SHOULD ONLY MOVE IF THE LETTER CHANGES.
			return chromatic[c - 1][1]; // second el in tuple is the descending enharmonic name.
		} else {
			return null;
		}
	}

	select(e) {
		e.preventDefault();
		// toggle selected - if selected, color should be red, else black
		let s = this.state.selected;
		this.setState({
			selected: !s
		});
	}

	componentDidMount() {
		document.addEventListener("keydown", (e) => {
			// only register up and down arrow keys if note is selected.
			if ( this.state.selected ) {
				let n = this.state.note;
				// console.log(n);
				if ( e.which === 38 ) {
					// console.log('move up a half step!');
					var nextNote = this.getNextNote('up');
					if ( nextNote !== null ) {
						this.props.changeNote(nextNote); // callback function from parent component updates parent state
					}
				} else if ( e.which === 40 ) {
					// console.log('move down a half step!');
					var nextNote = this.getNextNote('down');
					if ( nextNote !== null ) {
						this.props.changeNote(nextNote); // callback function from parent component updates parent state
					}
				}
					if ( nextNote !== undefined ) {
						this.setState({
							"note": nextNote
						});
					}
			}
		});
	}

	render() {
		return (
		<div className="noteAndAccidentalContainer">
			<Accidental type={this.getAccidental(this.state.currentNote)}/>
			<div onClick={this.select} className={!this.state.selected ? 'note' : 'activeNote'}></div>
		</div>
		);
	}
}

export default Note;