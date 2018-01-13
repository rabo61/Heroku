var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var fs = require('fs');
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
    res.json(emrBank[req.params.id]);
});

app.use('/api', router);

app.listen(1069, function(err) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.blue('Magic Happens on Port 69'));
    }
});