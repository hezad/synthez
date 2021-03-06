var MusicHelper = {
	__A4_freq: 440,

	__get_note_frequency: function(note_name, scale_frequency) {
		var a = scale_frequency;

		// var octave_freq_data = {
		// 	"A"	 : a,
		// 	"A#" : a *  Math.pow(2, 1/12),
		// 	"B"	 : a *  Math.pow(2, 2/12),   
		// 	"C"	 : a *  Math.pow(2, -9/12), 
		// 	"C#" : a *  Math.pow(2, -8/12),  
		// 	"D"	 : a *  Math.pow(2, -7/12), 
		// 	"D#" : a *  Math.pow(2, -6/12), 
		// 	"E"	 : a *  Math.pow(2, -5/12), 
		// 	"F"	 : a *  Math.pow(2, -4/12), 
		// 	"F#" : a *  Math.pow(2, -3/12), 
		// 	"G"	 : a *  Math.pow(2, -2/12), 
		// 	"G#" : a *  Math.pow(2, -1/12), 
		// }

		var octave_freq_data = {
			"A"	 : a,
			"A#" : a * Math.pow(2, 1/12),
			"B"	 : a * Math.pow(2, 2/12),   
			"C"	 : a * Math.pow(2, 3/12), 
			"C#" : a * Math.pow(2, 4/12),  
			"D"	 : a * Math.pow(2, 5/12), 
			"D#" : a * Math.pow(2, 6/12), 
			"E"	 : a * Math.pow(2, 7/12), 
			"F"	 : a * Math.pow(2, 8/12), 
			"F#" : a * Math.pow(2, 9/12), 
			"G"	 : a * Math.pow(2, 10/12), 
			"G#" : a * Math.pow(2, 11/12), 
		}
		
		return octave_freq_data[note_name];
	},

	note_to_freq: function(note_name) {
		var matches = note_name.toUpperCase().match(/^([a-g](\#|b)?)([0-9])$/i);

		if( ! matches ) {
			return null;
		}

		var note_name = matches[1];
		var note_octave = parseInt(matches[3]);

		if( ( ! note_name ) || note_octave === NaN ) {
			return null;
		}

		var scale_frequency = MusicHelper.__A4_freq * Math.pow(2, note_octave - 4)
		return MusicHelper.__get_note_frequency(note_name, scale_frequency);
	},

	rythm_beats_to_seconds: function(num_blacks, bpm) {
		return 1 / (bpm/60) * num_blacks;
	}
}

