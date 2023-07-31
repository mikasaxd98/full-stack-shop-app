const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');
const keys = require('./configs/keys');
const errorHandler = require('./middleware/error.middleware');

mongoose.connect(keys.DB_CONNECTION_KEY)
	.then(() => {
		console.log('Mongo db is connected')
	})
	.catch(error => console.log('error'))

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/api/auth', authRoutes);
app.use(errorHandler);


module.exports = app;


