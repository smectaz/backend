const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const stuffRoutes = require('./routes/stuff');

const app = express();

mongoose
	.connect(
		"mongodb+srv://smectaz77:Bulbytaz-77@atlascluster.yx6wq87.mongodb.net/?retryWrites=true&w=majority",
		{ useNewUrlParser: true,
		  useUnifiedTopology: true })
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS",
	);
	next();
});

app.use('/api/stuff', stuffRoutes)

module.exports = app;
