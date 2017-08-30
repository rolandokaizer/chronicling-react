import React, {Component} from 'react';
import {connect} from 'react-redux';
import Headline from '../components/headline';
import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/css';
import {fetchHeadline} from "../actions/index";

class HeadlineList extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.renderHeadline = this.renderHeadline.bind(this);
    }

    renderHeadline(item, index) {
        const BASE_URL = 'http://chroniclingamerica.loc.gov';
        const currentPage = this.props.headline.page;

        let startRow = ((currentPage % 5) * 10) - 10;
        if(currentPage%5 === 0){
            startRow = 40;
        }

        let endRow = startRow + 10;

        if (index >= startRow && index < endRow) {
            const title = item.title;
            const url = BASE_URL + item.id;
            const style = {
                padding: '5px 0'
            };

            return (
                <div style={style} key={index}><Headline title={title} url={url}/></div>
            );
        }
    }

    onChange(page) {
        this.props.fetchHeadline(this.props.headline.terms, page);
    }

    render() {
        const style = {
            marginBottom: 10
        };

        if (this.props.headline.headline.items !== undefined) {
            return (
                <div>
                    <div style={style}>
                        {this.props.headline.headline.items.map(this.renderHeadline)}
                    </div>
                    <Pagination
                        onChange={this.onChange}
                        pageSize={10}
                        defaultCurrent={1}
                        current={this.props.headline.page}
                        total={this.props.headline.headline.totalItems}/>
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