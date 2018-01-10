import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note.jsx';

class GrandStaff extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="space" id="g5"></div>
				<div className="line" id="f5"></div>
				<div className="space" id="e5"></div>
				<div className="line" id="d5"></div>
				<div className="space" id="c5"></div>
				<div className="line" id="b4"></div>
				<div className="space" id="a4"></div>
				<div className="line" id="g4"></div>
				<div className="space" id="f4"></div>
				<div className="line" id="e4"></div>
				<div className="space" id="d4"></div>
				<div className="ledger-line" id="c4"><Note changeNote={this.props.changeNote}/></div>
				<div className="space" id="b3"></div>
				<div className="line" id="a3"></div>
				<div className="space" id="g3"></div>
				<div className="line" id="f3"></div>
				<div className="space" id="e3"></div>
				<div className="line" id="d3"></div>
				<div className="space" id="c3"></div>
				<div className="line" id="b2"></div>
				<div className="space" id="a2"></div>
				<div className="line" id="g2"></div>
				<div className="space" id="f2"></div>
			</div>
			);
	}
}

export default GrandStaff;