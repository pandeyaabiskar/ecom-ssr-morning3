const express = require("express");
const cors = require('cors');
const productRouter = require('./routes/productRoutes')
const connectDatabase = require('./database/connection')
const hbs = require('hbs');
const PORT = 3000;

const app = express();

//Connect to database
connectDatabase()

app.use( cors() );
//Required to access json data in post function
app.use(express.json());
//Serve static files
app.use(express.static(__dirname + '/public'))

//Setup view engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//Use routes
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
