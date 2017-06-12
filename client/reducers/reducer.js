
const initialState = {
	uiDay: 1
}
	
const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);

	// if (action.type === 'SORT_FACTS') {
	// 	let sortedFacts = [];

	// 	for (let i = 0; i < state.picCombo.length; i++) {
	// 		sortedFacts.push(state.picCombo[i]);
	// 	}

	// 	sortedFacts.sort(function(a, b) {
	// 		return a[1].length - b[1].length;
	// 	});

	// 	return {...state, picCombo: sortedFacts}
	// }

	return state;
}

exports.reducer = reducer;

