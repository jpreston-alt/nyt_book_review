import React, { useEffect, useState } from "react";
import { Card, Text, Spacer, Button } from "../";
import PropTypes from 'prop-types';
import "./book-card.scss";

// if description is longer than 50 characters, render first 50 only
const renderDescription = (description) => {
    try {
        if (description && description.length < 51) {
            return description;
        } else if (description) {
            return `${description.substring(0, 50)}...`;
        }
    } catch (e) {
        console.error(e);
    }
};

const BookCard = (props) => {
    const { title, description, onClick } = props;
    const [descToShow, setDescToShow] = useState("");
    const [hoverState, setHoverState] = useState(false);

    // on hover show full decription
    useEffect(() => {
        if (hoverState && description) {
            setDescToShow(description);
        } else {
            setDescToShow(renderDescription(description));
        }
    }, [hoverState, description]);

    return (
        <Card testid={"bookcard"}>
            <div
                className="book-card text-center"
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
            >
                <Text size="h6" uppercase color="secondary">{title}</Text>
                <hr />
                <Text size="text" color="gray" testid="description">
                    {descToShow ? descToShow : "No Description Available"}
                </Text>
                <Spacer value={55} />
                <div className="text-center book-card__footer">
                    <Button onClick={onClick}>Reviews</Button>
                </div>
            </div>
        </Card>
    )
};

BookCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func
};

BookCard.defaultProps = {
    title: "",
    description: "",
    onClick: () => console.log("open modal")
};

export default BookCard;