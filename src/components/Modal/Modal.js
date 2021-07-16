import React from "react";
import { Text, Spacer } from "../";
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import { VscChromeClose } from "react-icons/vsc";
import "./modal.scss";

const BookDialog = (props) => {
    const { open, title, subtitle, onClose } = props;

    return (
        <Dialog open={open} onClose={onClose}>
            <div className="modal">
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
                {props.children}
            </div>
        </Dialog>
    )
};

export default BookDialog;