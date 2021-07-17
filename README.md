# NYT Book Review

## Description

NYT Book Review is an application that utilizes the NYT Books API to display best selling books in different categories. Users may view reviews, if available, on selected books.
<img src="./public/images/landingPage.png" alt="landing page" width="45%" style="margin: 10px;"/>

## Installation

1) cd into the project directory
2) From root of directory, install with the following command: 

```bash
yarn install
```

3) Create a .env file in the root of directory
4) Copy contents of .env.sample file in the root of directory into your .env file
4) Replace `<yourNytAPIkey>` with your NYT API key

## Usage

1) cd into the project directory
2) To run locally, run the following command from the root of directory: 

```bash
yarn start
```

3) User is first presented with best selling books in the Trade Fiction Paperback category
4) Hover over a results card to view full description
5) Select the "Reviews" button on a results card to view reviews on that book. If no reviews are availble, "No Reviews Available" will be displayed
6) Select a different book category from dropdown in the top right corner

NOTE: The NYT Books API has a call limit of 10 requests per minute. If too many requests are sent too quickly, and error message will display. If this happens wait a few moments and then refresh the page.

## Testing

1) cd into the project directory
2) From root of directory, run tests with the following command: 

```bash
yarn test
```

## Technologies Used
* React.js
* NYT Books API
* Material UI
* Sass
* Storybook
* React Testing Library
* prop-types
* classnames

## Contact Me
* On GitHub: jpreston-alt
* Via Email: joannappreston@gmail.com