import {FETCH_HEADLINE} from "../actions/index";

const initialState = {
    headline: [],
    page: 1,
    terms: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_HEADLINE:
            return Object.assign({}, state, {
                headline: action.payload.data,
                page: action.meta.page,
                terms: action.meta.terms
            });
        default:
            return state;
    }
}