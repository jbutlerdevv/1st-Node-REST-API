//Spin up Express App to help handle requests




const express = require('express');
const app = express(); //this is essentially let's us use it's features

const productRoutes = require('./api/routes/products');//imports product routes
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;

