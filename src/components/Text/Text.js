import React from "react";
import classnames from "classnames";
import "./text.scss";

const Text = (props) => {
    const { inline } = props;
    let classes = {
        [`text`]: true,
        [`text--${props.size}`]: true,
        [`text--${props.color}`]: true,
        [`text--uppercase`]: props.uppercase,
        [`text--capitalize`]: props.capitalize,
    };


    if (inline) {
        return (
            <span className={classnames(classes)}>
                {props.children}
            </span>
        )
    } else {
        return (
            <div className={classnames(classes)}>
                {props.children}
            </div>
        )
    }
};

export default Text;