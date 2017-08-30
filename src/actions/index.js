import axios from 'axios';

const BASE_URL = 'http://chroniclingamerica.loc.gov/';
const ENDPOINT_SEARCH = 'search/titles/results/';
const ENDPOINT_SUGGEST = 'suggest/titles/';

export const FETCH_HEADLINE = 'FETCH_HEADLINE';
export const FETCH_SUGGEST = 'FETCH_SUGGEST';

export function fetchHeadline(terms, page = 1, format = 'json'){
    const realPage = Math.ceil(page / 5);
    const url = `${BASE_URL}${ENDPOINT_SEARCH}?terms=${terms}&page=${realPage}&format=${format}`;
    const request = axios.get(url);

    return {
        type: FETCH_HEADLINE,
        payload: request,
        meta: {
            page: page,
            terms: terms
        }
    }
}

export function fetchSuggest(q){
    const url = `${BASE_URL}${ENDPOINT_SUGGEST}?q=${q}`;
    const request = axios.get(url);

    return {
        type: FETCH_SUGGEST,
        payload: request
    }
}