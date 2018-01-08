import React from 'react';
import ReactDOM from 'react-dom';
import TrebleClef from './TrebleClef.jsx';
import BassClef from './BassClef.jsx';

class GrandStaff extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<h1>Learn Your Intervals</h1>
				</div>
				<div>
					<TrebleClef/>
					<BassClef/>
				</div>
			</div>
			);
	}
}

export default GrandStaff;