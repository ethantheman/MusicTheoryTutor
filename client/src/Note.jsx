import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class Note extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div onClick={this.props.selectNote} className="note"></div>
		);
	}
}

export default Note;