const express = require("express");
const EventEmitter = require('events');

let count=0;
const event = new EventEmitter;

const app = express();

event.on("countAPI",()=>{
    count++;
    console.log("event Called",count);
})

app.get('/' ,(req,res)=>{
    res.send("api called");
    event.emit("countAPI")
});

app.get('/search' ,(req,res)=>{
    res.send("search api called");
});

app.get('/update' ,(req,res)=>{
    res.send("update api called");
});

app.listen(5000);
