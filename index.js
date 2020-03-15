const express = require('express');

const data = require('./data');

const app = express();

const config = {
    port: 3000,
    name: 'Dockerised Express App',
}

// Routes
app.get('/posts', (req, res) => {
    res.json(data.posts);
});

app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = data.posts.filter(post => {
        console.log(id, post);
        return post.id === id;
    });
    if(post.length > 0) {
        res.json(post);
    } else {
        res.status(404).json({
            error: 'Not Found',
        })
    }
});

// Start server
app.listen(config.port, ()=>{
    console.log(`${config.name} is running on ${config.port}`);
})