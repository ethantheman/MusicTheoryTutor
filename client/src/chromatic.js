/////////////////////////////////////////////////////////////////////////////////////////////////
//
// this file sets up the chromatic scale which will be used to display the notes on the staff.
// the values in each tuple represent enharmonic options for spelling each note. 
// Use tuple[0] for ascending context and use tuple[1] for descending context.
//
/////////////////////////////////////////////////////////////////////////////////////////////////
const chromatic = [
	["F2", "F2"],
	["F#2", "Gb2"],
	["G2", "G2"],
	["G#2", "Ab2"],
	["A2", "A2"],
	["A#2", "Bb2"],
	["B2", "Cb2"],
	["C3", "C3"],
	["C#3", "Db3"],
	["D3", "D3"],
	["D#3", "Eb3"],
	["E3", "Fb3"],
	["F3", "F3"],
	["F#3", "Gb3"],
	["G3", "G3"],
	["G#3", "Ab3"],
	["A3", "A3"],
	["A#3", "Bb3"],
	["B3", "Cb3"],
	["C4", "C4"],
	["C#4", "Db4"],
	["D4", "D4"],
	["D#4", "Eb4"],
	["E4", "Fb4"],
	["F4", "F4"],
	["F#4", "Gb4"],
	["G4", "G4"],
	["G#4", "Ab4"],
	["A4", "A4"],
	["A#4", "Bb4"],
	["B4", "Cb4"],
	["C5", "C5"],
	["C#5", "Db5"],
	["D5", "D5"],
	["D#5", "Eb5"],
	["E5", "Fb5"],
	["F5", "F5"],
	["F#5", "Gb5"],
	["G5", "G5"]
];

module.exports.chromatic = chromatic;