const express = require('express');

const app = express();

app.use(function(req, res, next) {
    console.log('Requête reçue !');
    next();
})

app.use(function(req, res, next) {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !'});
    next();
});

app.use((req, res, next) => {
    console.log('Votre requête a été envoyer avec succés ! ');
});

module.exports = app;