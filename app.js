import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Post from './models/post';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extendet: false}));
mongoose.connect('mongodb://localhost/test');

app.get('/', (req, res) => {
	Post.find({}).exec((err, posts) => {
		!err ? res.json(posts) : console.log('ERROR', err);
	})
});

app.post('/like', (req, res) => {
	Post.update({'id': req.body.id}, {$inc: {'metaData.currentLike': 1}}).exec((err, posts) => {
		!err ? res.sendStatus(200) : console.log('ERROR', err);
	})
})

app.listen(3001, () => console.log('listening on 3001 port'));
