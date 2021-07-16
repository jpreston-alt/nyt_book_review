import React from "react";
import classnames from "classnames";
import "./card.scss";

const Card = (props) => {
    let classes = {
        [`card`]: true,
        [`card--noShadow`]: props.noShadow,
        [`flex-grow`]: true
    };


    return (
        <div className={classnames(classes)}>
            {props.children}
        </div>
    )
};

export default Card;