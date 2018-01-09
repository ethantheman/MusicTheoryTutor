import React from 'react';
import ReactDOM from 'react-dom';

class BassClef extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<img src="./images/bass.png" className="bassClef" alt=""/>
				</div>
				<div>
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

export default BassClef;