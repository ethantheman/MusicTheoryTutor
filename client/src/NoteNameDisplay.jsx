import React from 'react';
import ReactDOM from 'react-dom';

class NoteNameDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.addToInterval(this.props.name, (flag) => {
			this.setState({selected: flag});
		});
	}

	render() {
		return this.props.deleted ? null :
		(<div className={!this.state.selected ? "noteNameContainer" : "activeNoteNameContainer"} onClick={this.handleClick}>
			<div className="noteName">{this.props.name}</div>
		</div>);
	}
}

export default NoteNameDisplay;