import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false
		}
		this.select = this.select.bind(this);
	}

	select(e) {
		// toggle selected - if selected, color should be red, else black
		e.preventDefault();
		let s = this.state.selected;
		this.setState({
			selected: !s
		});
		console.log(this.state.selected);
	}

	render() {
		return (
		<div onClick={this.select} className={this.state.selected ? 'note' : 'activeNote'}></div>
		);
	}
}

export default Note;