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
    res.json(emrBank);
});

router.get('/emr/:id', (req, res) => {
    res.json(emrBank.req.params.id);
});

router.post('/emr', (req, res) => {
    var body = req.body;
    var id = 0;
    for (var i in emrBank) {
        id++;
    }    
    body.id = id;
    emrBank.id = body;
    res.status(201).json(emrBank.id);
});

app.use('/api', router);

app.listen(1069, function(err) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.blue('Magic Happens on Port 69'));
    }
});