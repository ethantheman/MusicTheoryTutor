import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
let chromatic = require('./chromatic.js').chromatic;

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			currentIndex: 19, // this should eventually be set to default at middle C (index 17)
		}
		this.select = this.select.bind(this);
		this.getNextNote = this.getNextNote.bind(this);
		this.moveNote = this.moveNote.bind(this);
	}

	moveNote(direction) {
		let height = parseFloat($('.activeNote').css("top").slice(0, -2));
		console.log(height);
		if ( direction === "up" ) {
			height = height - 10;
			$('.activeNote').css("top", height.toString()+"px");
		}
		if ( direction === "down" ) {
			height = height + 10;
			$('.activeNote').css("top", height.toString()+"px");
		}
		
	}

	getNextNote(direction) {
		let c = this.state.currentIndex;
		if ( direction === 'up' && chromatic[c + 1] ) {
			this.setState({
				currentIndex: c + 1
			});
			this.moveNote("up");
			return chromatic[c + 1][0]; // first el in tuple is the ascending enharmonic name.
		} else if (direction === 'down' && chromatic[c - 1]) {
			this.setState({
				currentIndex: c - 1
			});
			this.moveNote("down");
			return chromatic[c - 1][1]; // second el in tuple is the descending enharmonic name.
		} else {
			return null;
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
				// console.log(n);
				if ( e.which === 38 ) {
					// console.log('move up a half step!');
					var nextNote = this.getNextNote('up');
					if ( nextNote !== null ) {
						this.props.changeNote(nextNote);
					}
				} else if ( e.which === 40 ) {
					// console.log('move down a half step!');
					var nextNote = this.getNextNote('down');
					if ( nextNote !== null ) {
						this.props.changeNote(nextNote);
					}
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
		<div>
			<div onClick={this.select} className={!this.state.selected ? 'note' : 'activeNote'}></div>
		</div>
		);
	}
}

export default Note;