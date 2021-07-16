import React from "react";
import classnames from "classnames";
import { Text } from "../";
import "./button.scss";

const Button = (props) => {
    const { onClick } = props;

    let classes = {
        [`button`]: true,
        [`button--disabled`]: props.disabled,
    };

    return (
        <button
            className={classnames(classes)}
            onClick={onClick}
            disabled={props.disabled ? props.disabled : false}
            data-testid={`button`}
        >
            <Text size="subtext">{props.children}</Text>
        </button>
    )
};

export default Button;