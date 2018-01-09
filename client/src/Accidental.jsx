import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Accidental extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// set appropriate accidental depending on type passed in via props.
		var src =
		this.props.type === 'sharp' ? src = '../images/sharp.png' :
		this.props.type === 'flat' ? src = '../images/flat.png' :
		"";
		return src !== "" ?
		(
			<div className="accidentalContainer">
				<img className="accidental" src={src}></img>
			</div>
		) : null; // return nothing if no type specified.
	}
}

export default Accidental;