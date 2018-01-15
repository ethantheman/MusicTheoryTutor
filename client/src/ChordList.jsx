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

	selectChord(e) {
		let chordName = e.target[e.target.selectedIndex].text;
		// execute a cb that will change the displayed chord in grandStaff.jsx
		this.props.changeChord(chordName);
	}

	render() {
		return (
			<div className="chordListContainer">
				<select id="chordList" onChange={this.selectChord}>
					<option disabled selected value>Select a chord to display</option>
					{this.props.chords.map((chord, i) => {
						return <option id="chordListEntry" key={i}>{chord.name}</option>
					})}
				</select>
			</div>
		);
	}
}

export default ChordList