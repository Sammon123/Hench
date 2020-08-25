const express = require("express");
const app = express();
const { resolve } = require("path");
const stripe = require("stripe")("sk_test_51HGqIEBMDhC88miklofXo4t06W3K46eueCM1J9kmV2b2NFsunyhg00kl1qwo01MbGROwmaiNNDccjaq2cQQkSueL00mR9Vlqk9");

app.use(express.static("."));
app.use(express.json());

const PORT = PORT.process.env || 5000;

const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};
app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd"
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});

app.listen(() => console.log(`Server listening on port ${PORT}`));