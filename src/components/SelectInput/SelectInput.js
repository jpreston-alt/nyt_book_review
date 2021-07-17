import React from "react";
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./select-input.scss";

const SelectInput = (props) => {
    const { options, value, onChange, placeholder } = props;

    return (
        <FormControl className="select-input">
            <Select
                value={value}
                onChange={onChange}
                placeholder={placeholder ? placeholder : "Select"}
                disableUnderline
            >
                {
                    options && (
                        options.map((el, index) => {
                            return <MenuItem key={index} value={el.value}>
                                {el.name}
                            </MenuItem>
                        })
                    )
                }
            </Select>
        </FormControl>
    )
};

SelectInput.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

SelectInput.defaultProps = {
    options: [],
    value: "",
    onChange: () => console.log("changing"),
    placeholder: "Select"
};

export default SelectInput;