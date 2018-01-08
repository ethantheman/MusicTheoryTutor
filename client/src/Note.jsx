import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			note: "d6" // string will determine which div to render note on. if selected, should listen for up/down key to change note and re-render accordingly.
		}
		this.select = this.select.bind(this);
	}

	select(e) {
		e.preventDefault();
		// toggle selected - if selected, color should be red, else black
		let s = this.state.selected;
		this.setState({
			selected: !s
		});
	}

	componentDidMount() {
		document.addEventListener("keydown", (e) => {
			// only register up and down arrow keys if note is selected.
			if ( this.state.selected ) {
				if ( e.which === 38 ) {
					console.log('move up a half step!');
				} else if ( e.which === 40 ) {
					console.log('move down a half step!');
				}
			}
		})
	}

	render() {
		return (
		<div onClick={this.select} className={!this.state.selected ? 'note' : 'activeNote'}></div>
		);
	}
}

export default Note;