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
			chromaticIndex: 20,
			currentNote: this.props.name
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

		let $child = $('.noteAndAccidentalContainer');
		let $parent = $child.parent();
		// console.log('current parent: ', $parent.attr('id'));
		if ( direction === "up" ) {
			// get div above $parent
			let $above = $parent.prev();
			// remove note/accidental from $parent and append to $above
			$child.remove();
			$above.append($child);
			// console.log('new parent: ', $above.attr('id'));
		}
		if ( direction === "down" ) {
			// get div below $parent
			let $below = $parent.next();
			// remove note/accidental from $parent and append to $below
			$child.remove();
			$below.append($child);
			// console.log('new parent: ', $below.attr('id'));
		}
		
	}

	getNextNote(direction) {
		// this function looks for the next note in the direction user clicks (up or down).
		// if the next note has a different letter name (i.e. D# -> E ), it will trigger the note
		// to move to the next div.
		// if the next note is a sharp or flat version of the same letter (i.e. D -> Db), it won't
		// trigger the note to move. 

		let c = this.state.chromaticIndex;
		let n = this.state.currentNote;
		if ( direction === 'up' && chromatic[c + 1] ) {
			let newNote = chromatic[c + 1][0]; // 0th index of tuple is the 'ascending' enharmonic spelling of the note.
			this.setState({
				chromaticIndex: c + 1,
				currentNote: newNote
			});
			if ( n[0] !== newNote[0] ) {
				// note letter changed - note needs to move
				this.moveNote("up");
			}
			return newNote;
		} else if (direction === 'down' && chromatic[c - 1]) {
			let newNote = chromatic[c - 1][1]; // index 1 of tuple is the 'descending' enharmonic spelling of the note.
			this.setState({
				chromaticIndex: c - 1,
				currentNote: newNote
			});
			if ( n[0] !== newNote[0] ) {
				// note letter changed - note needs to move.
				this.moveNote("down");
			}
			return newNote;
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
		}, () => {
			// call function from index.jsx to update which note is selected in app state
			if ( this.state.selected ) {
				this.props.changeSelection(this.state.currentNote);
			} else {
				this.props.changeSelection(null);
			}
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