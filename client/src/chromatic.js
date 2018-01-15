/////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// This file sets up the chromatic scale which will be used to display the notes on the staff.
// In the chromatic array, the values in each tuple represent enharmonic options spellings of each note.
// Use tuple[0] for ascending context and use tuple[1] for descending context. I have decided to leave
// out Fb and Cb as a stylistic choice, opting for enharmonic spellings E and B.
//
// Each index in the intervals array represents one half step, (i.e. one step on the chromatic scale).
// the number of half steps between any two notes determines the interval between those two notes.
// For
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const chromatic = [
	["E2", "E2"],
	["F2", "F2"],
	["F#2", "Gb2"],
	["G2", "G2"],
	["G#2", "Ab2"],
	["A2", "A2"],
	["A#2", "Bb2"],
	["B2", "B2"],
	["C3", "C3"],
	["C#3", "Db3"],
	["D3", "D3"],
	["D#3", "Eb3"],
	["E3", "E3"],
	["F3", "F3"],
	["F#3", "Gb3"],
	["G3", "G3"],
	["G#3", "Ab3"],
	["A3", "A3"],
	["A#3", "Bb3"],
	["B3", "B3"],
	["C4", "C4"],
	["C#4", "Db4"],
	["D4", "D4"],
	["D#4", "Eb4"],
	["E4", "E4"],
	["F4", "F4"],
	["F#4", "Gb4"],
	["G4", "G4"],
	["G#4", "Ab4"],
	["A4", "A4"],
	["A#4", "Bb4"],
	["B4", "B4"],
	["C5", "C5"],
	["C#5", "Db5"],
	["D5", "D5"],
	["D#5", "Eb5"],
	["E5", "E5"],
	["F5", "F5"],
	["F#5", "Gb5"],
	["G5", "G5"],
	["G#5", "Ab5"],
	["A5", "A5"]
];

const intervals = [
	"unison",
	"minor 2nd",
	"Major 2nd",
	"minor 3rd",
	"Major 3rd",
	"Perfect 4th",
	"tritone",
	"Perfect 5th",
	"minor 6th",
	"Major 6th",
	"minor 7th",
	"Major 7th",
	"octave"
];

module.exports.chromatic = chromatic;
module.exports.intervals = intervals;
