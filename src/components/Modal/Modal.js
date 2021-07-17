import React from "react";
import { Text, Spacer } from "../";
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import { VscChromeClose } from "react-icons/vsc";
import PropTypes from 'prop-types';
import "./modal.scss";

const Modal = (props) => {
    const { open, title, subtitle, onClose } = props;

    return (
        <div data-testid="modal">
            <Dialog open={open} onClose={onClose}>
                <Grid container spacing={1}>
                    <Grid item sm={10}>
                        <Text size="h5" uppercase color="primary">{title}</Text>
                        {
                            subtitle && (
                                <Text size="subtext" color="gray">{subtitle}</Text>
                            )
                        }
                    </Grid>
                    <Grid item sm>
                        <div className="text-right" onClick={onClose}>
                            <VscChromeClose className="icon-btn" />
                        </div>
                    </Grid>
                </Grid>
                <Spacer value={10} />
                <div className="modal__body">
                    {props.children}
                </div>
            </Dialog>
        </div>
    )
};

Modal.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onClose: PropTypes.func
};

Modal.defaultProps = {
    open: false,
    title: "",
    subtitle: "",
    onClose: () => console.log("close")
};

export default Modal;