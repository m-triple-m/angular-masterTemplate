const express = require('express');
const api_config = require('./config');
const app = express();
const port = api_config.port;
const userRouter = require('./routers/userManager');

app.use('/user', userRouter);

const Model = require('./models/userModel');

app.get('/getuser', (req, res) => {
    res.send('user request at index');
})

app.post('/add', (req, res) => {

    let mydata = {
        username: 'mewtwo',
        email: 'mewtwo@poke.com',
        password: '1234',
        age: 50
    };

    new Model(mydata).save()
        .then(data => {
            console.log('data saved');
            res.send('success');
        })
        .catch(err => {
            console.error(err);
            res.json(err);
        })

})

app.get('/home', (req, res) => {
    res.send('request processed at home');
})

app.get('/add', (req, res) => {
    console.log('an add request');
    res.send('got an add request');
})

app.listen(port, () => {
    console.log('Hurray!!!!! server started on port ' + port);
});