import React from "react";
import ReactDOM from "react-dom";

class NoteNameDisplay extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		////////////////////////////////////////////////////////////////////////////////////////////
		// check if this noteName is part of the selected notes array to handle conditional render:
		let x = -1;
		this.props.notes.forEach((note, i) => {
			if (note.name === this.props.name) {
				x = i;
			}
		});
		////////////////////////////////////////////////////////////////////////////////////////////
		return this.props.deleted ? null : (
			<div
				className={
					this.props.selectedNotes.includes(x)
						? "activeNoteNameContainer"
						: "noteNameContainer"
				}
			>
				<div className="noteName">{this.props.name}</div>
			</div>
		);
	}
}

export default NoteNameDisplay;
