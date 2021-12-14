import { DECREMENT_SUM, INCREMENT_SUM, RESET_SUM, UPDATE_SIZE } from "../constants/constants";

const counterReducer = (state = {size: 0, sum: 0}, action) => {
    switch(action.type) {
        case UPDATE_SIZE:
            return {...state, size:action.payload};
        case INCREMENT_SUM:
            return {...state, sum: state.sum + action.payload};
        case DECREMENT_SUM:
            return {...state, sum: state.sum - action.payload};
        case RESET_SUM:
            return {...state, sum: 0};
        default:
            return state;
    }
};

export default counterReducer;