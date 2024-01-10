const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

// this will be used to track number of request
let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

// middleware for rate limiting
app.use((req,res,next)=>{
  const userId=req.headers['user-id'];
//user count initialization
  if(!numberOfRequestsForUser[userId]){
    numberOfRequestsForUser[userId]={count:1,timestamp:Date.now()};
  }else{
    // time window checking if it is passed ( 1sec)
    if(Date.now()- numberOfRequestsForUser[userId].timestamp > 1000){
      numberOfRequestsForUser[userId]={count:1,timestamp:Date.now()};
    }else{
      // if limit is exceeded more than 5 then it will give me error
      if(numberOfRequestsForUser[userId].count>=5){
        return res.status(404).json({error:'limit exceeded'});
      }
      //incrementing the count 
      numberOfRequestsForUser[userId].count +=1;
    }
  }
next();

});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
