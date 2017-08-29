import React, {Component} from 'react';
import {connect} from 'react-redux';
import Headline from '../components/headline';
import {Pagination} from 'antd';
import 'antd/lib/pagination/style/css';
import {fetchHeadline} from "../actions/index";

class HeadlineList extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    renderHeadline(item, index){
        const BASE_URL = 'http://chroniclingamerica.loc.gov';
        if(index < 10){
            const title = item.title;
            const url = BASE_URL + item.id;

            return (
                <div key={index}><Headline title={title} url={url} /></div>
            );
        }
    }

    onChange(page, pageSize){
        fetchHeadline(this.props.headline.terms, page);
    }

    render() {
        if (this.props.headline.headline.items) {
            return (
                <div>
                    <div style={{marginBottom: 10}}>{this.props.headline.headline.items.map(this.renderHeadline)}</div>
                    <Pagination
                        onChange={this.onChange}
                        pageSize={10}
                        defaultCurrent={1}
                        total={Math.ceil(this.props.headline.headline.totalItems / 10)}/>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

function mapStateToProps({headline}) {
    return {headline}
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHeadline: (terms, page) => dispatch(fetchHeadline(terms, page))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadlineList);