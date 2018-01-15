import React from "react";
import ReactDOM from "react-dom";
import Dropdown from 'react-dropdown';
import $ from 'jquery';
// import 'react-dropdown/style.css'

class ChordList extends React.Component {
	constructor(props) {
		super(props);
		this.selectChord = this.selectChord.bind(this);
	}

	selectChord() {
		let newChord = $('.chordList');
		console.log(newChord);
		// execute a cb that will change the displayed chord in grandStaff.jsx
		// this.props.changeChord(newChord);
	}

	render() {
		return (
			<div className="chordListContainer">
			</div>
		);
	}
}

export default ChordList