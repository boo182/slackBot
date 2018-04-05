const express = require('express');
const bodyParser = require ('body-parser');


const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.status(200).send('Hello You');
});

app.listen(port, () => console.log(`Listening on port: ${port}`));


app.post('/hello', (req, res) => {
    const userName = req.body.userName;
    const botPayload = {
        text: `Hello ${userName} and welcome to my channel`,
    };

    if(userName !== 'slackbot') {
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
});