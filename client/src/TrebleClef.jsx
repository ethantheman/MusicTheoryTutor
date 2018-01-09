import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note.jsx';

class TrebleClef extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<img src="./images/treble.png" className="trebleClef" alt=""/>
				</div>
				<div>
					<div className="line" id="f6"><hr/></div>
					<Note changeNote={this.props.changeNote}/>
					<div className="space" id="e6"></div>
					<div className="line" id="d6"><hr/></div>
					<div className="space" id="c5"></div>
					<div className="line" id="b4"><hr/></div>
					<div className="space" id="a4"></div>
					<div className="line" id="g4"><hr/></div>
					<div className="space" id="f4"></div>
					<div className="line" id="e4"><hr/></div>
					<div className="space" id="d4"><hr style={{"visibility": "hidden"}}/></div>
					<div className="ledger-line" id="c4"><hr id="middle-C"/></div>
				</div>
			</div>
			);
	}
}

export default TrebleClef;