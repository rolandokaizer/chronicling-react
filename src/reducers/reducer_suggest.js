import {FETCH_SUGGEST} from "../actions/index";

export default function (state=[], action) {
    switch (action.type){
        case FETCH_SUGGEST:
            return [action.payload.data[1], state];
        default:
            return state;
    }
}