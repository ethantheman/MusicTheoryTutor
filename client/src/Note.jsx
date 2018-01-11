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
			currentIndex: 19, // default set to middle C (19 / C4)
			name: this.props.name // need to keep track of this in order to update accidental.
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
		// let $child = $('.noteAndAccidentalContainer');
		// let $parent = $child.parent();
		if ( direction === "up" ) {
			
			// // get div above $parent
			// let $above = $parent.prev();
			// // remove note/accidental from $parent and append to $above
			// $child.remove();
			// $above.append($child);
		}
		if ( direction === "down" ) {
			// // get div below $parent
			// let $below = $parent.next();
			// // remove note/accidental from $parent and append to $below
			// $child.remove();
			// $below.append($child);
		}
	}

	getNextNote(direction) {
		// this function looks for the next note in the direction user clicks (up or down).
		// if the next note has a different letter name (i.e. D# -> E ), it will trigger the note
		// to move to the next div.
		// if the next note is a sharp or flat version of the same letter (i.e. D -> Db), it won't
		// trigger the note to move. 


		let c = this.state.currentIndex;
		let n = this.state.name;
		if ( direction === 'up' && chromatic[c + 1] ) {
			let newNote = chromatic[c + 1][0]; // 0th index of tuple is the 'ascending' enharmonic spelling of the note.
			this.setState({
				currentIndex: c + 1,
				name: newNote
			});
			if ( n[0] !== newNote[0] ) {
				// note letter changed - note needs to move
				this.moveNote("up");
			}
			return newNote;
		} else if (direction === 'down' && chromatic[c - 1]) {
			let newNote = chromatic[c - 1][1]; // index 1 of tuple is the 'descending' enharmonic spelling of the note.
			this.setState({
				currentIndex: c - 1,
				name: newNote
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
		///////////////////////////////////////////////////
		// append note component to its initial parent div:

		let n = this.props.name.toLowerCase();
		// handle accidentals:
		if ( n.length > 2 ) {
			n = n[0] + n[2]; // remove the accidental which will always be at position 1.
		}
		let $parent = $('#' + n);
		let $child = $('#'+this.props.name);
		$parent.append($child);
		//////////////////////////////////////////////////
		// listen for note movement:
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
		<div className="noteAndAccidentalContainer" id={this.props.name}>
			<Accidental type={this.getAccidental(this.state.name)}/>
			<div onClick={this.select} className={!this.state.selected ? 'note' : 'activeNote'}></div>
		</div>
		);
	}
}

export default Note;