import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import AutoComplete from 'antd/lib/auto-complete';
import 'antd/lib/auto-complete/style/css';
import {fetchHeadline, fetchSuggest} from "../actions/";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            terms: '',
            dataSource: []
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    handleSearch(value) {
        this.setState({terms: value});

        if(value){
            this.props.fetchSuggest(value);
            this.props.fetchHeadline(value);
        }
    }

    onSelect(value) {
        this.setState({terms: value});
        this.props.fetchHeadline(value);
    }

    render() {
        return (
            <AutoComplete
                dataSource={this.props.suggestions}
                style={{ width: 600, margin: '30px 0 10px 0' }}
                onSelect={this.onSelect}
                onSearch={_.debounce((value)=>{this.handleSearch(value)}, 300)}
                placeholder="Search headlines..."
                allowClear
                defaultActiveFirstOption={false}
            />
        );
    }
}

function mapStateToProps({suggestions}) {
    return {suggestions}
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHeadline: (terms, page) => dispatch(fetchHeadline(terms, page)),
        fetchSuggest: (q) => dispatch(fetchSuggest(q))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);