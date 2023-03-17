# Toolbox Challenge: Frontend
This challenge consists in developing an UI to access the API and displays the results in a friendly formatted table.
## Installation And Running

Install dependencies with your Package Manager, package the solution with build and start the Server.

```console
$ npm install 
$ npm run build
$ npx server build
```

Or you can build a Docker Image and run it:
```console
$ docker build .
$ docker run -p 3000:3000 {Image}
```












    
## Observations

No environment  variables are allowed, so the url to access the API is fixed to 'http://localhost:5000'. Also the port for running this UI is fixed to 3000.
## Documentation

A simple UI that displays the data retrieved using the API. There is an input text to optionally filter for a particular file. 
## Running Tests

The solution can be test with the following command:

```console
$ npm test
```

## Suggested Features

- Configuration through Environments Variables or Config file.
- Button to clear search box.
- Results count, Pagination and Sorting.