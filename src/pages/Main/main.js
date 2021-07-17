import React, { useEffect, useState } from "react";
import "./main.scss";
import * as queries from "../../queries/nytApi";
import { BookCard, Text, Spacer, Modal, Card } from "../../components";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';

const Main = (props) => {
    const [books, setBooks] = useState([]);
    const [open, setOpen] = useState(false);
    const [reviewData, setReviewData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bookToReview, setBookToReview] = useState(null);

    useEffect(() => {
        getBooks();
    }, [])

    // fetch books
    const getBooks = async () => {
        try {
            const _books = await queries.fetchBooks();
            if (_books && _books.results && _books.results.books) {
                setBooks(_books.results.books.splice(0, 10));
            }
        } catch (e) {
            console.log(e);
        }
    }

    // fetch book reviews and open modal
    const selectBookToReview = async (isbn, book) => {
        try {
            setBookToReview(book);
            setLoading(true);
            setOpen(true);
            const _reviews = await queries.fetchReviews(isbn);
            if (_reviews && _reviews.results) {
                setReviewData(_reviews.results);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    const onClose = () => {
        setOpen(false);
    }

    // render review cards
    const renderReviews = () => {
        if (reviewData && reviewData.length > 0) {
            return <Grid container spacing={2}>
                {
                    reviewData.map((el, index) => {
                        return <Grid item xs={12} sm={6}>
                            <Card>
                                <div className="text-center">
                                    <Text size="text" color="darkgray">{el.summary}</Text>
                                    <Spacer value={20} />
                                    <Text color="gray" size="subtext">-{el.byline} {el.publication_dt}</Text>
                                </div>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        } else {
            return <div className="text-center">
                <Spacer value={10} />
                <Text size={"text"}>No Reviews Available</Text>
            </div>
        }
    }

    return (
        <div className="main">
            <Modal
                open={open}
                onClose={onClose}
                title={bookToReview && `${bookToReview.title}`}
                subtitle={bookToReview && `By ${bookToReview.author}`}
            >
                {
                    loading ? (
                        <div className="text-center">
                            <Text size="text">Loading Reviews</Text>
                            <Spacer value={10} />
                            <CircularProgress />
                        </div>
                    ) : renderReviews()
                }

            </Modal>
            <div className="main__title-container">
                <Text size="h1" uppercase color="primary">NYT Book Review</Text>
                <Text size="subtext" color="gray">Trade Fiction Paperback</Text>
                <Spacer value={10} />
            </div>
            <div className="main__card-container">
                <Grid container spacing={2}>
                    {
                        books && books.length > 0 ? (
                            books.map((el, index) => {
                                return <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    lg={4}
                                    className="d-flex"
                                    key={index}
                                >
                                    <BookCard
                                        title={el.title}
                                        description={el.description}
                                        onClick={() => selectBookToReview(el.primary_isbn13, el)}
                                    />
                                </Grid>
                            })
                        ) : null
                    }
                </Grid>
            </div>
        </div>
    )
};

export default Main;