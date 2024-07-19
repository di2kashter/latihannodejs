const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/hello', (req, res)=> {
    res.json({
        "messange": "Success fetch message",
        "data" : "Hello Word!"
    });
});

app.get('/user', (req, res)=>{
    res.json({
        "message" : "success fetch user",
        "data" : {id : 1, 
            name : "Budi", 
            username : "budidu", 
            email : "budidu@mail.com"
        }
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port,() =>{
    console.log(`server running at http://localhost:${port}`);
});