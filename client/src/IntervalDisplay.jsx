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
			for ( var i = 0; i < notes.length-1; i++ ) {
				for ( var j = i+1; j < notes.length; j++ ) {
					tuples.push([notes[i], notes[j]]);
				}
			}
			return tuples;
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
		if ( i && j ) {
			if ( j - i > 0 && (j - i) % 12 === 0 || i - j > 0 && (i - j) % 12 === 0 ) {
				return intervals[12]; // get octaves before using % 12 - otherwise it will return unison (0) instead of octave (12).
			} else {
				return j - i >= 0 ? intervals[(j - i) % 12] : intervals[(i - j) % 12];
			}
		}
	}

	render() {
		console.log('intervals: ', this.getAllIntervals());
		return (<div className="intervalDisplay">
							<h3>Displaying intervals for the following notes: </h3>
							<ul>{this.props.selectedNotes.map((index, i) => <li key={i}>{this.props.notes[index].name}</li>)}</ul>
						</div>
						);
	}
}

export default IntervalDisplay;