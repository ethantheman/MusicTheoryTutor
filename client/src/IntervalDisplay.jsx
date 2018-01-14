import React from 'react';
import ReactDOM from 'react-dom';
let chromatic = require('./chromatic.js').chromatic;
let intervals = require('./chromatic.js').intervals;

class IntervalDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.getInterval = this.getInterval.bind(this);
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
				return intervals[12]; // octaves must be handled before using %12 below otherwise it will show 'unison'
			} else {
				return j - i >= 0 ? intervals[(j - i) % 12] : intervals[(i - j) % 12];
			}
		}
	}

	render() {
		return (<div className="intervalDisplay">
							<h3>Displaying intervals for the following notes: </h3>
							<ul>{this.props.selectedNotes.map((index, i) => <li key={i}>{this.props.notes[index].name}</li>)}</ul>
						</div>
						);
	}
}

export default IntervalDisplay;