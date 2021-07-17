import React from "react";
import PropTypes from 'prop-types';
import "./spacer.scss";

const Spacer = (props) => {

    return (
        <div data-testid="spacer" className="spacer" style={{ paddingTop: props.value }}></div>
    )
};

Spacer.propTypes = {
    value: PropTypes.number
};

Spacer.defaultProps = {
    value: 0
};

export default Spacer;