import React from "react";
import ReactDOM from "react-dom";
let chromatic = require("./chromatic.js").chromatic;
let intervals = require("./chromatic.js").intervals;
let triads = require("./chromatic.js").triads;

class IntervalDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.getAllIntervals = this.getAllIntervals.bind(this);
		this.getInterval = this.getInterval.bind(this);
		this.getChordQuality = this.getChordQuality.bind(this);
	}

	getAllIntervals() { //  
		// call getInterval on each unique pair of notes.
		// selectedNotes contains indices of each note in this.props.notes.
		let notes = [];
		this.props.selectedNotes.forEach(index => {
			notes.push(this.props.notes[index].name);
		});

		if (notes.length > 1) {
			// must have at least two notes selected
			let tuples = []; // will hold pairs of notes

			// before generating tuples, sort notes in ascending order:
			notes = this.props.sort(notes);

			for (var i = 0; i < notes.length - 1; i++) {
				// each tuple contains a note and the next highest note in the chord.
				tuples.push([notes[i], notes[i + 1]]);
			}
			let result = [];
			tuples.forEach(tuple => {
				result.push(
					tuple[0] +
						" - " +
						tuple[1] +
						": " +
						this.getInterval(tuple[0], tuple[1])
				);
			});
			return result;
		} else {
			return null;
		}
	}

	getChordQuality() {
		if ( this.getAllIntervals() === null ) {
			return null;
		} else {
			let intervals = this.getAllIntervals().map(string => string.split(': '));
			// intervals is an array of tuples - tuple[0] contains notes in the interval,
			// and tuple[1] is the interval (i.e. 'minor 3rd')

			/////////////////////////////////////////////////////////////////////
			// 													TRIADS
			// example input: ["Major 3rd", "minor 3rd"] => "major"
			/////////////////////////////////////////////////////////////////////
			if ( intervals.length === 2 ) {
				// lookup potential matches in triads for each possible inversion:
				let options = ["root position", "first inversion", "second inversion"];
				// options.forEach((inversion) => {
				for ( var i = 0; i < options.length; i++ ) {
					var obj = triads[options[i]];
					for ( var quality in obj ) {
						if ( obj[quality].every((interval, i) => {return interval === intervals[i][1]})) {
							return quality;
						}
					}
				}
			}

			

			//////////////////////////////////////////////////////////////////////
			// 													   7th chords 
			// example input: ["major third", "minor third", "minor third"] => "7"
			//////////////////////////////////////////////////////////////////////
		}
		// return null;
	}

	getInterval(x, y) {
		// this function uses the arrays from chromatic.js to calculate the interval between two notes.
		let i, j, interval, octaves, result;
		for (var k = 0; k < chromatic.length; k++) {
			if (chromatic[k].includes(x)) {
				i = k;
			}
			if (chromatic[k].includes(y)) {
				j = k;
			}
		}

		if (i >= 0 && j >= 0) {
			if (
				(j - i > 0 && (j - i) % 12 === 0) ||
				(i - j > 0 && (i - j) % 12 === 0)
			) {
				return intervals[12]; // get octaves before using % 12 - otherwise it will return unison (0) instead of octave (12).
			} else {
				return j - i >= 0 ? intervals[(j - i) % 12] : intervals[(i - j) % 12];
			}
		}
	}

	render() {
		console.log('chord quality: ', this.getChordQuality());
		// this.getChordQuality();
		return this.getAllIntervals() === null ? (
			<div className="intervalDisplay">
				<h3>Add and select notes to see the intervals between them.</h3>
			</div>
		) : (
			<div className="intervalDisplay">
				<h3>The intervals in your selection are: </h3>
				<ul>
					{this.getAllIntervals().map((interval, i) => (
						<li key={i}>{interval}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default IntervalDisplay;
