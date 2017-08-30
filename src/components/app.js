import React, {Component} from 'react';

import SearchBar from '../containers/search_bar';
import HeadlineList from '../containers/headline_list';

export default class App extends Component {
    render() {
        return (
            <div style={{width: 600, margin: 'auto'}}>
                <SearchBar/>
                <HeadlineList/>
            </div>
        );
    }
}
