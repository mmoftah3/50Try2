const express = require('express');
const res = require('express/lib/response');

const app = express();

app.use(express.static('src'));



// ------------------------------------------------- code for level one -------------------------------------------------------

// handles returning the next step of the algorithm
app.get('/next-step', (req, res, next) => {

  
});

app.get('/prev-step', (req, res, next) => {

});

// handles generating an array of any number of numbers in a given range
app.get('/generate-numbers', (req, res, next)=> {
    // get range and number of numbers from the request object
    let range = req.query.range;
    let num = req.query.num;
    let randomNumsArr=[range, num];   // define array of hold generated numbers

    // --------------------- code to generate random numbers goes here ----------------------- 

    // push the numbers from the algorithm into the array 
    // send back the array of random numbers generated
    res.send(randomNumsArr);
});


// handles verifying the user's input
app.get('/check-answer', (req, res, next) => {

});

app.listen(3000);

