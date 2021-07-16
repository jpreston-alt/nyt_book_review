import React from "react";
import "./spacer.scss";

const Spacer = (props) => {

    return (
        <div className="spacer" style={{ paddingTop: props.value }}></div>
    )
};

export default Spacer;