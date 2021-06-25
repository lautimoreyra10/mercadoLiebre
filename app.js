const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 8000, function (){
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
});

app.get('/register', (req,res)=>{
    let registerPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(registerPath);
});

app.get('/login', (req,res)=>{
    let loginPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(loginPath);
});