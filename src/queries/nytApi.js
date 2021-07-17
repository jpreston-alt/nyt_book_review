const apiKey = process.env.REACT_APP_API_KEY;

// fetch trade fiction paperback books
const fetchBooks = async () => {
    let results = [];
    const list = "trade-fiction-paperback";
    const date = "current";
    await fetch(`https://api.nytimes.com/svc/books/v3/lists/${date}/${list}?api-key=${apiKey}`, {
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success retrieving book data:', data);
            results = data;
        })
        .catch((error) => {
            console.error('Error retrieving book:', error);
        });

    return results;
};

// fetch reviews based on isbn
const fetchReviews = async (isbn) => {
    let results = [];
    await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${isbn}&api-key=${apiKey}`, {
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success retrieving review data:', data);
            results = data;
        })
        .catch((error) => {
            console.error('Error retrieving review data:', error);
        });

    return results;
};

export {
    fetchBooks,
    fetchReviews
}