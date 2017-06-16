
const initialState = {
	// dailyUIs: {
	// 	day001: false, day002: false, day003: false, day004: false, day005: false,
	// 	day006: false, day007: false, day008: false, day009: false, day010: false,
	// 	day011: false, day012: false, day013: false, day014: false, day015: false,
	// 	day016: false, day017: false, day018: false, day019: false, day020: false,
	// 	day021: false, day022: false, day023: false, day024: false, day025: false,
	// 	day026: false, day027: false, day028: false, day029: false, day030: false,
	// 	day031: false, day032: false, day033: false, day034: false, day035: false,
	// 	day036: false, day037: false, day038: false, day039: false, day040: false,
	// 	day041: false, day042: false, day043: false, day044: false, day045: false,
	// 	day046: false, day047: false, day048: false, day049: false, day050: false,
	// 	day051: false, day052: false, day053: false, day054: false, day055: false,
	// 	day056: false, day057: false, day058: false, day059: false, day060: false,
	// 	day061: false, day062: false, day063: false, day064: false, day065: false,
	// 	day066: false, day067: false, day068: false, day069: false, day070: false,
	// 	day071: false, day072: false, day073: false, day074: false, day075: false,
	// 	day076: false, day077: false, day078: false, day079: false, day080: false,
	// 	day081: false, day082: false, day083: false, day084: false, day085: false,
	// 	day086: false, day087: false, day088: false, day089: false, day090: false,
	// 	day091: false, day092: false, day093: false, day094: false, day095: false,
	// 	day096: false, day097: false, day098: false, day099: false, day100: false									
	// },
	dailyUIs: [
		false, false, false, false, false, false, false, false, false, false,
		false, false, false, false, false, false, false, false, false, false,
		false, false, false, false, false, false, false, false, false, false,
		false, false, false, false, false, false, false, false, false, false,
		false, false, false, false, false, false, false, false, false, false,
		false, false, false, false, false, false, false, false, false, false,		
		false, false, false, false, false, false, false, false, false, false,
		false, false, false, false, false, false, false, false, false, false,
		false, false, false, false, false, false, false, false, false, false,
		false, false, false, false, false, false, false, false, false, false						
	],
	showHome: true,
	Day1B: false,
	Day2A: true,
	Day2B: false,
	Day2C: false,
	Day3A: true,
	Day3B: false
}
	
const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);

	if (action.type === 'VIEW_DAY_ONE') {
		state.showHome = false;
		state.dailyUIs[0] = true;
		return {...state}
	}

	if (action.type === 'VIEW_DAY_ONE_B') {
		state.Day1B = true;
		return {...state}
	}

	if (action.type === 'VIEW_DAY_TWO') {
		state.showHome = false;
		state.dailyUIs[1] = true;
		return {...state}
	}

	if (action.type === 'VIEW_DAY_TWO_B') {
		state.Day2A = false;
		state.Day2B = true;
		return {...state}
	}

	if (action.type === 'VIEW_DAY_TWO_C') {
		state.Day2B = false;
		state.Day2C = true;
		return {...state}
	}

	if (action.type === 'VIEW_DAY_THREE') {
		state.showHome = false;
		state.dailyUIs[2] = true;
		return {...state}
	}

	if (action.type === 'VIEW_DAY_THREE_B') {
		state.Day3A = false;
		state.Day3B = true;
		return {...state}
	}

	if (action.type === 'VIEW_DAY_FOUR') {
		state.showHome = false;
		state.dailyUIs[3] = true;
		return {...state}
	}

	if (action.type === 'SHOW_HOME') {
		state.showHome = true;
		state.Day1B = false;
		state.Day2A = true;
		state.Day2B = false;
		state.Day2C = false;
		state.Day3A = true;
		state.Day3B = false;
		let notFoundIt = true;
		let counter = 0;
		while (notFoundIt) {
			if (state.dailyUIs[counter]) {
				state.dailyUIs[counter] = false;
				notFoundIt = false;
			} else {
				counter += 1;
			}
		}
		return {...state}
	}

	return state;
}

exports.reducer = reducer;

