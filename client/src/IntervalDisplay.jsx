import React from 'react';
import ReactDOM from 'react-dom';
let chromatic = require('./chromatic.js').chromatic;
let intervals = require('./chromatic.js').intervals;

class IntervalDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.getAllIntervals = this.getAllIntervals.bind(this);
		this.getInterval = this.getInterval.bind(this);
	}

	getAllIntervals() {
		// call getInterval on each unique pair of notes.
		// selectedNotes contains indices of each note in this.props.notes.
		let notes = [];
		this.props.selectedNotes.forEach((index) => {
			notes.push(this.props.notes[index].name);
		});

		if ( notes.length > 1 ) { // must have at least two notes selected
			let tuples = []; // will hold pairs of notes

			// before generating tuples, sort notes in ascending order:
			notes = this.props.sort(notes).reverse(); // reverse because the props sort function puts it in descending order.

			for ( var i = 0; i < notes.length-1; i++ ) { // each tuple contains a note and the next highest note in the chord.
				tuples.push([notes[i], notes[i+1]]);
			}
			let result = [];
			tuples.forEach(tuple => {
				result.push(tuple[0] + ' - ' + tuple[1] + ': ' + this.getInterval(tuple[0], tuple[1]));
			});
			console.log('result: ', result);
			return result;
		} else {
			return null;
		}

	}

	getInterval(x, y) {
		// this function uses the arrays from chromatic.js to calculate the interval between two notes.
		let i, j, interval, octaves, result;
		for ( var k = 0; k < chromatic.length; k++ ) {
			if ( chromatic[k].includes(x) ) {
				i = k;
			}
			if ( chromatic[k].includes(y) ) {
				j = k;
			}
		}

		if ( i >= 0 && j >= 0 ) {
			if ( j - i > 0 && (j - i) % 12 === 0 || i - j > 0 && (i - j) % 12 === 0 ) {
				return intervals[12]; // get octaves before using % 12 - otherwise it will return unison (0) instead of octave (12).
			} else {
				return j - i >= 0 ? intervals[(j - i) % 12] : intervals[(i - j) % 12]
			}
		}
	}

	render() {
		return this.getAllIntervals() === null ? <div className="intervalDisplay"><h3>Add and select notes above to see the interval between them.</h3></div> : (<div className="intervalDisplay">
							<h3>The intervals in your selection are: </h3>
							<ul>{this.getAllIntervals().map((interval, i) => <li key={i}>{interval}</li>)}</ul>
						</div>
						);
	}
}

export default IntervalDisplay;