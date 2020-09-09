const express = require("express");
const session = require('express-session');
const logger = require('morgan')
const passport = require('passport')
const bodyParser = require('body-parser')
// const db = require('./models')
// const routes = require('./routes')
const { resolve } = require("path");
const nodemailer = require('nodemailer');
require('dotenv').config();
// This is your real test secret API key.
const stripe = require("stripe")('sk_test_51HGqIEBMDhC88miklofXo4t06W3K46eueCM1J9kmV2b2NFsunyhg00kl1qwo01MbGROwmaiNNDccjaq2cQQkSueL00mR9Vlqk9');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("."));
app.use(express.json());

// express middleware 
app.use(logger('dev'))
app.use(bodyParser.urlencoded({
    extended: false
}));

// express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};
const chargeCustomer = async (customerId) => {
    // Lookup the payment methods available for the customer
    const paymentMethods = await stripe.paymentMethods.list({
        customer: customerId,
        type: "card"
    });
    // Charge the customer and payment method immediately
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: "usd",
        customer: customerId,
        payment_method: paymentMethods.data[0].id,
        off_session: true,
        confirm: true
    });
    if (paymentIntent.status === "succeeded") {
        console.log("✅ Successfully charged card off session");
    }
}

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Alternatively, set up a webhook to listen for the payment_intent.succeeded event
    // and attach the PaymentMethod to a new Customer
    const customer = await stripe.customers.create();
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        customer: customer.id,
        setup_future_usage: 'off_session',
        amount: calculateOrderAmount(items),
        currency: "usd"
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    })
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
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));