import React from "react";
import classnames from "classnames";
import { Card, Text, Spacer, Button } from "../";
import "./book-card.scss";

const renderDescription = (description) => {
    try {
        if (description.length < 50) {
            return description;
        } else {
            return `${description.substring(0, 50)}...`;
        }
    } catch (e) {
        console.error(e);
    }
};

const BookCard = (props) => {
    const { title, description, onClick } = props;

    return (
        <Card>
            <div className="book-card">
                <Text size="h6" uppercase color="secondary">{title}</Text>
                <Spacer value={10} />
                <Text size="text" color="gray">{renderDescription(description)}</Text>
                <Spacer value={15} />
                <div className="text-center">
                    <Button onClick={onClick}>Read Reviews</Button>
                </div>
            </div>
        </Card>
    )
};

export default BookCard;