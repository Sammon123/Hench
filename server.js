const stripe = require("stripe")("sk_test_51HGqIEBMDhC88miklofXo4t06W3K46eueCM1J9kmV2b2NFsunyhg00kl1qwo01MbGROwmaiNNDccjaq2cQQkSueL00mR9Vlqk9");

// Create a PaymentIntent with the order amount and currency
const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
});
res.send({
    clientSecret: paymentIntent.client_secret
});