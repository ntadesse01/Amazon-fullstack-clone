const express = require('express');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51NctanLx0gsR7F7OOalkP8SNBSJPggUvhHW6TnB2NuIzzT2hG5K18QJjPgVwzvvj6V4jEUOg3Y8TmjJf3A2rGULc00QOTcpSWI"); // here goes the key from the .env

const app = express();
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => res.status(200).send('hello world'));

// app.post('/payments/create', async (request, response) => {
//   const total = request.body.total;
//   console.log('Payment Request Received for this amount ===', total);
  
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total,
//       currency: 'usd',
//     });

//     response.status(201).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.error('Error creating payment intent:', error);
//     response.status(500).send({
//       error: 'An error occurred while creating the payment intent.',
//     });
//   }
// });



app.post("/payments/create", async (req, res) => {
	console.log("object");
	try {
		const total = req.query.total;
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total),
			currency: "usd",
		});
		console.log(paymentIntent.client_secret);
		res.send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).send("server error");
	}
});



const port = 7000; // Choose a port number of your choice
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
