import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];
let avatar = "";
const sendTweets = [];


server.post('/sign-up', (req, res) => {
    const user = req.body;
    avatar = user.avatar;
    users.push(user);

    console.log(users);
    res.send('OK');
});



server.get('/tweets', (req, res) => {
    res.send(sendTweets.slice(0, 10));
});

server.post('/tweets', (req, res) => {
    const tweet = req.body;
    tweets.unshift(tweet);
    sendTweets.unshift({ ... tweet , avatar: avatar})

    console.log(tweets);
    res.send('OK');
});


server.listen(5000);