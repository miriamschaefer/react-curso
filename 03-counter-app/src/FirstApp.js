import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ greeting, subtitle }) => {

    return (
        <>
            <h1>{greeting}</h1>
            <p>{subtitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: ':)'
}

export default FirstApp;