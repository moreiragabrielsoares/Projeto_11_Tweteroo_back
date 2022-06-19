import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];


server.post('/sign-up', (req, res) => {
    const user = req.body;
    users.push(user);

    console.log(users);
    res.send('OK');
});


server.post('/tweets', (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);

    console.log(tweets);
    res.send('OK');
});


server.listen(5000);