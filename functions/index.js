const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// This is your real test secret API key.
const stripe = require("stripe")('sk_test_51HGqIEBMDhC88miklofXo4t06W3K46eueCM1J9kmV2b2NFsunyhg00kl1qwo01MbGROwmaiNNDccjaq2cQQkSueL00mR9Vlqk9');
require('dotenv').config();
const nodemailer = require('nodemailer')
// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: 'F15h3567!',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: `"Nodemailer Contact"${process.env.EMAIL}`,
        to: process.env.EMAIL,
        subject: 'Node Contact Request',
        text: 'Hello World?',
        html: output
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.error(err);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('PreviewURL: %s', nodemailer.getTestMessageUrl(info));
    })

})

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api