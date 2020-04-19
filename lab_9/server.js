// These are our required libraries to make the server work.
// We're including a server-side version of Fetch to build on your client-side work
const express = require('express');
const fetch = require('node-fetch');

// Here we instantiate the server we're going to turn on
const app = express();


// Servers are often subject to the whims of their environment.
// Here, if our server has a PORT defined in its environment, it will use that.
// Otherwise, it will default to port 3000
const port = process.env.PORT || 3000;

// Our server needs certain features - like the ability to send and read JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// And the ability to serve some files publicly, like our HTML.
app.use(express.static('public'));



function processDataForFrontEnd(req, res) {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'; 
  let count_array = [];
  let result = {};


  // Your Fetch API call starts here
  // Note that at no point do you "return" anything from this function -
  // it instead handles returning data to your front end at line 34.
    fetch(baseURL)

      .then((data) => data.json())
      .then((data) => { // this is an explicit return. If I want my information to go further, I'll need to use the "return" keyword before the brackets close
                // console.log(data);
                return data; // <- this will pass the data to the next "then" statement when I'm ready.
            })
      .then(function (data) {
        for (i = 0; i < data.length; i++) {
          count_array.push(data[i]["category"]);
        }
        for (var i = 0; i < count_array.length; ++i) {
          if (!result[count_array[i]]) result[count_array[i]] = 0;
          result[count_array[i]]++;
        }
        console.log(result);
        return result;
      })

      .then(function (data) {
        const dataPoints = [];

        Object.keys(data).forEach((category) => {
          let dataPoint = {y: data[category],label: category,}
          dataPoints.push(dataPoint);
        })
        console.log(dataPoints);
        return dataPoints;
      })

      .then((data) => {
        console.log(data);
        res.send({ data: data }); // here's where we return data to the front end
      })
    
};

// This is our first route on our server.
// To access it, we can use a "GET" request on the front end
// by typing in: localhost:3000/api or 127.0.0.1:3000/api
app.get('/api', (req, res) => {processDataForFrontEnd(req, res)});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
