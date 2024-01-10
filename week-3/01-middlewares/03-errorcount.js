const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

//global middleware/error handler
app.use((err,req,res,next)=>{
  // error count variable
  // incrementing
  errorCount ++;

  //setting the status code
  res.status(404).json({error:'not available'});
})

app.get('/user', function(req, res, next) {
  // handle errors
  try {
    throw new Error("User not found");
  } catch (error) {
    // Passing the error to the next middleware
    next(error);
  }
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

module.exports = app;
