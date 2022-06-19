import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const users = [];


server.post('/sign-up', (req, res) => {
    const user = req.body;
    users.push(user);

    console.log(users);
    res.send('OK');
});


server.listen(5000);