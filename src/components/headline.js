import React from 'react';
import PropTypes from 'prop-types';

const headline = props => {
    return (
        <a href={props.url} target="_blank">{props.title}</a>
    );
};

headline.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

headline.defaultProps = {
    title: 'Headline Title',
    url: 'http://chroniclingamerica.loc.gov/'
};

export default headline;