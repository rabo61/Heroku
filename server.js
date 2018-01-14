var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var fs = require('fs');
var parser = require('body-parser');
app.use(parser.json());
var emrBank;

fs.readFile('./emr.json', 'utf-8', (err, data) => {
    if(err) {
        console.log(chalk.red(err));
    } else {
        emrBank = JSON.parse(data);
    }
});

router.get('/test', function(req, res) {
    res.status(200).send('Hello world');
});

router.get('/emr', (req, res) => {
    res.json('"message": "Link this up to return all emr out that db"');
});

router.get('/emr/:id', (req, res) => {
    res.json('"message": "Link this up to return a emr out that db"');
});

router.post('/emr', (req, res) => {
    res.json('"message": "Link this up to create new thing in db"');
});

app.use('/api', router);

app.listen(1069, function(err) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.blue('Magic Happens on Port 69'));
    }
});