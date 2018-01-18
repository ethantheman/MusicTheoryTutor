import React from "react";
import ReactDOM from "react-dom";
let chromatic = require("./chromatic.js").chromatic;
let intervals = require("./chromatic.js").intervals;
let triads = require("./chromatic.js").triads;
let seventhChords = require("./chromatic.js").seventhChords;

class IntervalDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chord: "major"
		}
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

	componentWillReceiveProps() {
		let chord = this.getChordQuality();
		if ( chord ) {
			this.setState({
				chord: chord
			});
		}
	}

	getChordQuality() {
		// this function is working for triads and 7th chords in any inversion, but only
		// for closed voicings (all notes must be in same octave, otherwise doesn't recognize
		// the intervals in the chord. will need to add some functionality to handle wider voicings.)

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
				for ( var i = 0; i < options.length; i++ ) {
					var obj = triads[options[i]];
					for ( var quality in obj ) {
						if ( obj[quality].every((interval, i) => {return interval === intervals[i][1]})) {
							return 'quality: ' + quality + ' inversion: ' + options[i];
						}
					}
				}
			}

			//////////////////////////////////////////////////////////////////////
			// 													   7th chords 
			// example input: ["major third", "minor third", "minor third"] => "7"
			//////////////////////////////////////////////////////////////////////
			if ( intervals.length === 3 ) {
				let options = ["root position", "first inversion", "second inversion", "third inversion"];
				for ( var i = 0; i < options.length; i++ ) {
					var obj = seventhChords[options[i]];
					for ( var quality in obj ) {
						if ( obj[quality].every((interval, i) => {return interval === intervals[i][1]})) {
							return 'quality: ' + quality + ' inversion: ' + options[i];
						}
					}
				}
			}
		}
		return 'not sure';
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
				{this.state.chord ? 
					<div>
						<h3>The chord in your selection is: </h3>
						<p>{this.state.chord}</p>
					</div>
					: null
				}
			</div>
		);
	}
}

export default IntervalDisplay;
