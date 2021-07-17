import React from "react";
import { Card, Text, Spacer, Button } from "../";
import PropTypes from 'prop-types';
import "./book-card.scss";

// if description is longer than 50 characters, render first 50 only
const renderDescription = (description) => {
    try {
        if (description && description.length < 50) {
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

    return (
        <div data-testid="bookcard" style={{ height: "100%" }}>
            <Card>
                <div className="book-card text-center">
                    <Text size="h6" uppercase color="secondary">{title}</Text>
                    <Spacer value={10} />
                    <Text size="text" color="gray">{renderDescription(description)}</Text>
                    <Spacer value={55} />
                    <div className="text-center book-card__footer">
                        <Button onClick={onClick}>Reviews</Button>
                    </div>
                </div>
            </Card>
        </div>
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