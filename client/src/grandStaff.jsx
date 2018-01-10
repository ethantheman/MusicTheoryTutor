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
				<div>
					<img src="./images/bass.png" className="bassClef" alt=""/>
					<img src="./images/treble.png" className="trebleClef" alt=""/>
				</div>
				<div>
					<div className="space" id="g5"></div>
					<div className="line" id="f5"><hr/></div>
					<div className="space" id="e5"></div>
					<div className="line" id="d5"><hr/></div>
					<div className="space" id="c5"></div>
					<div className="line" id="b4"><hr/></div>
					<div className="space" id="a4"></div>
					<div className="line" id="g4"><hr/></div>
					<div className="space" id="f4"></div>
					<div className="line" id="e4"><hr/></div>
					<div className="space" id="d4"><hr id="space"/></div>
					<div className="ledger-line" id="c4"><hr id="middle-C"/><Note changeNote={this.props.changeNote}/></div>
					<div className="space" id="b3"><hr id="space"/></div>
					<div className="line" id="a3"><hr/></div>
					<div className="space" id="g3"></div>
					<div className="line" id="f3"><hr/></div>
					<div className="space" id="e3"></div>
					<div className="line" id="d3"><hr/></div>
					<div className="space" id="c3"></div>
					<div className="line" id="b2"><hr/></div>
					<div className="space" id="a2"></div>
					<div className="line" id="g2"><hr/></div>
				</div>
			</div>
			);
	}
}

export default GrandStaff;