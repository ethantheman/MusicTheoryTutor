import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";
import GrandStaff from "./GrandStaff.jsx";
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
		this.writeData = this.writeData.bind(this);
		this.readData = this.readData.bind(this);
	}

	writeData(arr) {
		arr.forEach(obj => {
			db.ref('chords/' + obj.name).set({
				name: obj.name,
				notes: obj.notes
			});
		});
	}

	readData() {
		// get data from firebase and use it to set state.
		db.ref('/chords').on('value', (chords) => {
			let c = [];
			let dbChords = chords.val()
			for ( var chord in dbChords ) {
				c.push(dbChords[chord]);
			}
			this.setState({chords: c});
		});

	}

	saveChord(c) {
		let newChords = this.state.chords;
		newChords.push(c);

		this.setState({chords: newChords}, () => {
			console.log('new chords: ', this.state.chords);
		});

		// save it to database as well:
		this.writeData(this.state.chords);
	}

	componentWillMount() {
		this.readData();
	}

	render() {
		return (
			<div>
				<div>
					<h1 id="title">Ethan's Chord Builder</h1>
				</div>
				<br />
				<GrandStaff saveChord={this.saveChord} chords={this.state.chords}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
