import React from "react";
import classnames from "classnames";
import PropTypes from 'prop-types';
import "./text.scss";

const Text = (props) => {
    const { inline, size, color, uppercase, capitalize } = props;
    let classes = {
        [`text`]: true,
        [`text--${size}`]: true,
        [`text--${color}`]: true,
        [`text--uppercase`]: uppercase,
        [`text--capitalize`]: capitalize,
    };


    if (inline) {
        return (
            <span className={classnames(classes)} data-testid="text">
                {props.children}
            </span>
        )
    } else {
        return (
            <div className={classnames(classes)} data-testid="text">
                {props.children}
            </div>
        )
    }
};

Text.propTypes = {
    inline: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string,
    uppercase: PropTypes.bool,
    capitalize: PropTypes.bool,
};

Text.defaultProps = {
    inline: PropTypes.false,
    size: "text",
    color: "default",
    uppercase: false,
    capitalize: false,
};

export default Text;