import React from "react";
import classnames from "classnames";
import PropTypes from 'prop-types';
import "./card.scss";

const Card = (props) => {
    let classes = {
        [`card`]: true,
        [`card--noShadow`]: props.noShadow,
        [`flex-grow`]: true
    };


    return (
        <div className={classnames(classes)} data-testid={props.testid ? props.testid : "card"}>
            {props.children}
        </div>
    )
};

Card.propTypes = {
    noShadow: PropTypes.bool,
};

Card.defaultProps = {
    noShadow: false,
};

export default Card;