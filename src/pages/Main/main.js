import React, { useEffect, useState } from "react";
import "./main.scss";
import * as queries from "../../queries/nytApi";
import { BookCard, Text, Spacer, Modal, Card, SelectInput } from "../../components";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';

const Main = (props) => {
    const [books, setBooks] = useState([]);
    const [open, setOpen] = useState(false);
    const [reviewData, setReviewData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bookToReview, setBookToReview] = useState(null);
    const [listNames, setListNames] = useState([]);
    const [category, setCategory] = useState("trade-fiction-paperback");
    const [errorMessage, setErrorMessage] = useState({ show: false, message: "An error occured" })

    useEffect(() => {
        setErrorMessage({ show: false, message: "An error occured" });
        getListNames();
    }, [])

    useEffect(() => {
        getBooks(category);
    }, [category])

    // fetch books
    const getBooks = async (list) => {
        try {
            setLoading(true);
            const _books = await queries.fetchBooks(list);
            if (_books && _books.results && _books.results.books) {
                setBooks(_books.results.books.splice(0, 9));
            } else if (_books && _books.fault) {
                setErrorMessage({ show: true, message: _books.fault.faultstring });
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    // fetch list names
    const getListNames = async () => {
        try {
            const _listNames = await queries.fetchListNames();
            if (_listNames && _listNames.results && _listNames.results.length > 0) {
                let mapped = _listNames.results.map(el => {
                    return {
                        name: el.display_name,
                        value: el.list_name_encoded
                    }
                })
                setListNames(mapped);
            } else if (_listNames && _listNames.fault) {
                setErrorMessage({ show: true, message: _listNames.fault.faultstring });
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
            } else if (_reviews && _reviews.fault) {
                setErrorMessage({ show: true, message: _reviews.fault.faultstring });
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    const onClose = () => {
        setOpen(false);
    }

    const handleInputChange = (event) => {
        setCategory(event.target.value);
    }

    // render review cards
    const renderReviews = () => {
        if (reviewData && reviewData.length > 0) {
            return <Grid container spacing={2}>
                {
                    reviewData.map((el, index) => {
                        return <Grid item xs={12} sm={6} key={index}>
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
                <Text size={"text"} color="darkgray">No Reviews Available</Text>
            </div>
        }
    }

    return (
        <div className="main">
            <div className="main__title-container">
                <Grid container spacing={1}>
                    <Grid item sm>
                        <Text size="h1" uppercase color="primary">NYT Book Review</Text>
                    </Grid>
                    {
                        listNames && listNames.length > 0 && (
                            <Grid item sm={4}>
                                <div className="text-right">
                                    <SelectInput
                                        options={listNames}
                                        onChange={handleInputChange}
                                        value={category}
                                    />
                                </div>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
            <Spacer value={10} />
            <div className="main__card-container">
                {
                    errorMessage.show === true && (
                        <div>
                            <Text size="text">Error: {errorMessage.message}</Text>
                            <Text size="text">This error is likely due to too many requests, please wait a second and then refresh the page</Text>
                        </div>
                    )
                }
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
            <Modal
                open={open}
                onClose={onClose}
                title={bookToReview && `${bookToReview.title}`}
                subtitle={bookToReview && `By ${bookToReview.author}`}
            >
                {
                    errorMessage.show === true && (
                        <div>
                            <Text size="text">Error: {errorMessage.message}</Text>
                            <Text size="text">This error is likely due to too many requests, please wait a second and then refresh the page</Text>
                        </div>
                    )
                }
                {
                    loading ? (
                        <div className="text-center">
                            <Text size="text" color="darkgray">Loading Reviews</Text>
                            <Spacer value={10} />
                            <CircularProgress />
                        </div>
                    ) : renderReviews()
                }

            </Modal>
        </div>
    )
};

export default Main;
