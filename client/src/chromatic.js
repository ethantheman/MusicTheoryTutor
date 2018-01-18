/////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// This file sets up the chromatic scale which will be used to display the notes on the staff.
// In the chromatic array, the values in each tuple represent enharmonic options spellings of each note.
// Use tuple[0] for ascending context and use tuple[1] for descending context. I have decided to leave
// out Fb and Cb as a stylistic choice, opting for enharmonic spellings E and B.
//
// Each index in the intervals array represents one half step, (i.e. one step on the chromatic scale).
// the number of half steps between any two notes determines the interval between those two notes.
// 
// This file also sets up the intervals between notes in the chromatic scale, and uses those intervals
// to establish the sets of intervals used to determine chord qualities in each possible inversion of 
// triads, 7th chords, and beyond.
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

const triads = {
	// this obj stores the ascending intervals for each quality
	// of triad in each possible inversion.

	"root position": {
		"major": ["Major 3rd", "minor 3rd"],
		"minor": ["minor 3rd", "Major 3rd"],
		"augmented": ["Major 3rd", "Major 3rd"],
		"diminished": ["minor 3rd", "minor 3rd"]
	},

	"first inversion": {
		"major": ["minor 3rd", "Perfect 4th"],
		"minor": ["Major 3rd", "Perfect 4th"],
		"augmented": ["Major 3rd", "Major 3rd"],
		"diminished": ["minor 3rd", "tritone"]
	},

	"second inversion": {
		"major": ["Perfect 4th", "Major 3rd"],
		"minor": ["Perfect 4th", "minor 3rd"],
		"augmented": ["Major 3rd", "Major 3rd"],
		"diminished": ["tritone", "minor 3rd"]
	}

}

const seventhChords = {
	"root position": {
		"major": ["Major 3rd", "minor 3rd", "Major 3rd"],
		"dominant": ["Major 3rd", "minor 3rd", "minor 3rd"],
		"minor": ["minor 3rd", "Major 3rd", "minor 3rd"],
		"half-diminished": ["minor 3rd", "minor 3rd", "Major 3rd"],
		"diminished": ["minor 3rd", "minor 3rd", "minor 3rd"]
	},

	"first inversion": {
		"major": ["minor 3rd", "Major 3rd", "minor 2nd"],
		"dominant": ["minor 3rd", "minor 3rd", "Major 2nd"],
		"minor": ["Major 3rd", "minor 3rd", "Major 2nd"],
		"half-diminished": ["minor 3rd", "Major 3rd", "Major 2nd"],
		"diminished": ["minor 3rd", "minor 3rd", "minor 3rd"]
	},

	"second inversion": {
		"major": ["Major 3rd", "minor 2nd", "Major 3rd"],
		"dominant": ["minor 3rd", "Major 2nd", "Major 3rd"],
		"minor": ["minor 3rd", "Major 2nd", "minor 3rd"],
		"half-diminished": ["Major 3rd", "Major 2nd", "minor 3rd"],
		"diminished": ["minor 3rd", "minor 3rd", "minor 3rd"]
	},

	"third inversion": {
		"major": ["minor 2nd", "Major 3rd", "minor 3rd"],
		"dominant": ["Major 2nd", "Major 3rd", "minor 3rd"],
		"minor": ["Major 2nd", "minor 3rd", "Major 3rd"],
		"half-diminished": ["Major 2nd", "minor 3rd", "minor 3rd"],
		"diminished": ["minor 3rd", "minor 3rd", "minor 3rd"]
	}
}



module.exports.chromatic = chromatic;
module.exports.intervals = intervals;
module.exports.triads = triads;
module.exports.seventhChords = seventhChords;
