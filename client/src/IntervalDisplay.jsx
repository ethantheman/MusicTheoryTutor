import React from 'react';
import ReactDOM from 'react-dom';
let chromatic = require('./chromatic.js').chromatic;
let intervals = require('./chromatic.js').intervals;

class IntervalDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false
		}
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
							{this.props.interval.length === 2 ?
								<h3>The interval between <span>{this.props.interval[0]}</span> and <span>{this.props.interval[1]}</span> is: {this.getInterval(this.props.interval[0], this.props.interval[1])}</h3>
								: <h3>Select any two notes in the boxes above to get the interval between them.</h3>
							}
						</div>
						);
	}
}

export default IntervalDisplay;