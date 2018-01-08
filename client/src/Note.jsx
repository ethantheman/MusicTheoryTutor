import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			note: "D4" // string will determine which div to render note on. if selected, should listen for up/down key to change note and re-render accordingly.
		}
		this.select = this.select.bind(this);
		this.getNextNote = this.getNextNote.bind(this);
	}

	getNextNote(direction) {
		let currentIndex = -1;;
		this.props.chromatic.forEach((tuple, i) => {
			if ( tuple.includes(this.state.note) ) {
				currentIndex = i;
			}
		});
		if ( direction === 'up' && this.props.chromatic[currentIndex + 1] ) {
			return this.props.chromatic[currentIndex + 1][0]; // first el in tuple is the ascending enharmonic name.
		} else if (direction === 'down' && this.props.chromatic[currentIndex - 1]) {
			return this.props.chromatic[currentIndex - 1][1]; // second el in tuple is the descending enharmonic name.
		}
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
				let n = this.state.note;
				console.log(n);
				if ( e.which === 38 ) {
					console.log('move up a half step!');
					var nextNote = this.getNextNote('up');
				} else if ( e.which === 40 ) {
					console.log('move down a half step!');
					var nextNote = this.getNextNote('down');
				}
					if ( nextNote !== undefined ) {
						this.setState({
							"note": nextNote
						});
					}
			}
		});
	}

	render() {
		return (
		<div onClick={this.select} className={!this.state.selected ? 'note' : 'activeNote'}></div>
		);
	}
}

export default Note;