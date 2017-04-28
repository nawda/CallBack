const axios = require('axios');

axios
.get('http://www.omdbapi.com/?s=Lord%20Of%20The%20Rings')
.then(extractAndLogMovies);

const extractAndLogMovies = resonse => console.log(response.data.Search)