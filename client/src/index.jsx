import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";
import GrandStaff from "./GrandStaff.jsx";
import ChordList from "./ChordList.jsx";
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBGcizOrAVdI2s3BHbp1E__zgaLSGhEQAQ",
    authDomain: "music-theory-tutor.firebaseapp.com",
    databaseURL: "https://music-theory-tutor.firebaseio.com",
    projectId: "music-theory-tutor",
    storageBucket: "",
    messagingSenderId: "280434016383"
  };

firebase.initializeApp(config);

const db = firebase.database();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chords: []
		}
		this.saveChord = this.saveChord.bind(this);
	}

	saveChord(c) {
		this.state.chords.push(c);
		this.setState({chords: this.state.chords});
		// save it to database as well...

	}

	render() {
		console.log(this.state.chords);
		return (
			<div>
				<div>
					<h1 id="title">Ethan's Chord Builder</h1>
					<div id="saveButtonContainer">
						<button id="saveButton" onClick={this.saveChord}>Save This Chord</button>
					</div>
				</div>
				<ChordList chords={this.state.chords}/>
				<br />
				<GrandStaff saveChord={this.saveChord}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
