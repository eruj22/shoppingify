# News Personal Dashboard

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#possible-improvements">Possible Improvements</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This app lets you make your own shopping lists. First you can save your favorite items and even add image or description to them. Then on a click of a plus button add them to your personal shopping list. Click save and then you can view your whole list in the history section. When you are in the store check or uncheck selected items. After a visit to the store, you can let the list be marked as completed or you can simply just delete it.

The design was taken from the <a href="https://devchallenges.io/challenges/mGd5VpbO4JnzU6I9l96x">DevChallenges</a>.

### Built With

The project is build with these technologies:

- React
- Styled Components
- Axios
- React Icons
- React Router DOM
- React Tooltip
- my own API that connects to the MongoDB

### Possible improvements

The app can be improved in a few ways:

- Added login for each user - each user has his own shopping lists
- Added statistics about items or shopping lists

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js - [Download](https://nodejs.org)
- npm

```sh
npm install npm@latest -g
```

### Installation

Note: You will have to have your own backend in order for this app to work. API endpoints are /items and /history. Both are used as an environment variables.

1. Clone the repo

```sh
git clone https://github.com/eruj22/shoppingify
```

2. Install NPM packages

```sh
npm install
```

3. Run application in localhost

```sh
npm start
```
