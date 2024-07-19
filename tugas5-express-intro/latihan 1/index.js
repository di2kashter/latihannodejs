const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use ((req, res, next)=>{
    console.log(`${req.method} request for ${req.url}`);
        next();
});

app.listen(port,() =>{
    console.log(`server running at http://localhost:${port}`);
});