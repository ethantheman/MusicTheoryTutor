import React from 'react';
import ReactDOM from 'react-dom';

const NoteNameDisplay = (props) => {
	return props.deleted ? null :
	(<div className="noteNameContainer">
		<div className="noteName">{props.name}</div>
	</div>);
}

export default NoteNameDisplay;