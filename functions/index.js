const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HPz5HJXhhLAeb58RDkOL6Zhokz5xa4IHVBa9KwdDGCaVeSoeBa1eXVreNFd9sJA3sYFZ0hn7ulesaNUvYtSQyYY00HFQSssc3')
//const stripe = require('stripe')('sk_test_51HPvU9DFg5koCdLGeOEiFvwHat4v8eMjX6SY0YCwxPBQBUPhKy1fPVhiSM5cQtgW7QBG9ydQcXnW57TDxVE2f3H000HSfmEQZF')
//api

//app config

const app = express();

//middlewares

app.use(cors({origin: true}));
app.use(express.json())

//api routes

app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total
  console.log('Payment Request Received', total)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits
    currency: 'usd'
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
  console.log(paymentIntent)
});

//listen command

exports.api = functions.https.onRequest(app);

//example endpoint => http://localhost:5001/clone-r-e6081/us-central1/api