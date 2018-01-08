import React from 'react';
import ReactDOM from 'react-dom';

class BassClef extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div>
					<div className="space" id="b3">B</div>
					<div className="line" id="a3"><hr/></div>
					<div className="space" id="g3">G</div>
					<div className="line" id="f3"><hr/></div>
					<div className="space" id="e3">E</div>
					<div className="line" id="d3"><hr/></div>
					<div className="space" id="c3">C</div>
					<div className="line" id="b2"><hr/></div>
					<div className="space" id="a2">A</div>
					<div className="line" id="g2"><hr/></div>
				</div>
			);
	}
}

export default BassClef;