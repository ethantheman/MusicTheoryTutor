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
		let i, j;
		for ( var k = 0; k < chromatic.length; k++ ) {
			if ( chromatic[k].includes(x) ) {
				i = k;
			}
			if ( chromatic[k].includes(y) ) {
				j = k;
			}
		}
		if ( i && j ) {
			return j - i >= 0 ? intervals[j - i] : intervals[i - j];
		}
	}

	render() {
		return (<div className="intervalDisplay">
							{this.props.interval.length === 2 ?
								<h3>The interval between <span>{this.props.interval[0]}</span> and <span>{this.props.interval[1]}</span> is: {this.getInterval(this.props.interval[0], this.props.interval[1])}</h3>
								: <h3>Select two notes to see the interval between them.</h3>
							}
						</div>
						);
	}
}

export default IntervalDisplay;