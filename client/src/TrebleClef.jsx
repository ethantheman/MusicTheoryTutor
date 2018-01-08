import React from 'react';
import ReactDOM from 'react-dom';

class TrebleClef extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div>
					<div className="line" id="f6"><hr/></div>
					<div className="space" id="e6">E</div>
					<div className="line" id="d6"><hr/></div>
					<div className="space" id="c5">C</div>
					<div className="line" id="b4"><hr/></div>
					<div className="space" id="a4">A</div>
					<div className="line" id="g4"><hr/></div>
					<div className="space" id="f4">F</div>
					<div className="line" id="e4"><hr/></div>
					<div className="space" id="d4">D</div>
					<div className="ledger-line" id="c4">C</div>
				</div>
			);
	}
}

export default TrebleClef;