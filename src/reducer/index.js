


// Actions
const SELECT_BUTTON = 'SELECT_BUTTON';

// Action Creators

const selectButton = (item) => {
    return {
        type: SELECT_BUTTON,
        item
    };
}

// Reducer

const initialState = {
    item: 'PAGE1'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_BUTTON:
            return changeButton(state, action);
        default:
            return state;
    }
};

// Reducer Functions
const changeButton = (state, action) => {
    return {
        ...state,
        item: action.item
    };
};

// Export Action Creators

const actionCreators = {
    selectButton,
};

export { actionCreators };


// Export Reducer

export default reducer;