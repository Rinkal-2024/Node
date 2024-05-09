const express = require('express');
//const path = require ('path');
const app = express();  // for executable state
const reqFilter = require('./middleware')
const route = express.Router();

route.use(reqFilter);
app.get('',(req,res)=>{
    res.send("Welcome to home page")
})
route.get('/user',(req,res)=>{
    res.send("Welcome user")
})
route.get('/login',(req,res)=>{
    res.send("Welcome to login page")
})
app.get('/contact',(req,res)=>{
    res.send("Welcome to contact page")
})
app.use('/',route);
app.listen(5000);

// const publicPath = path.join(__dirname, 'public');
// app.set('view engine', 'ejs');
//app.use(express.static(publicPath));

// app.get('/profile' , (_ ,res)=>{  //template engine
//     const user = {
//         name : 'rit',
//         email : 'rit@gmail.com',
//         age : 20,
//         skills :['java','React', 'Angular']
//     }
//     res.render('profile',{user})
// })
// app.get('/login' ,(_ , res)=>{
//     res.render('login')
// })
// app.get('' , (_ ,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about' , (_ ,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })
// app.get('*' , (_ ,res)=>{
//     res.sendFile(`${publicPath}/no-page-found.html`)
// })
// app.listen(5000);
// app.get('', (req,res)=>{
//     console.log("Data Sent by browser -->",req.query.name);
//     res.send(`
//     <h3>Welcome to home Page </h3> <a href = "/about">Go to about page </a>
//     `);
// })
// app.get('/about', (req,res)=>{
//     res.send(`
//     <input type ="text"  Placeholder = "user name" value = "${req.query.name}">
//     <button>click Me</button>
//     <a href = "/">Go to home page </a>
//     `);
// })
// app.get('/login', (req,res)=>{
//     res.send("Hello , This is login page");
// })
// app.listen(5000);

// const http = require('http');
// const data = require('./data');

//const { log } = require('console');
// http.createServer((req, res) =>{
//     res.writeHead(200 , {'content-type':'application.json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5500);

// const { log } = require('console');
// const app = require('./app')
// const colors = require('colors');
// console.log("package.json".blue);
// var x = 10;
// let y = 20;
// x = 100;
// console.log(x+y);

// if(y === 20){
//     console.log("matched");
// }
// for (i=0 ; i<10; i++){
//     console.log(i);
// }

// const arr = [2,3,1,6];
// console.log(arr);
// console.log(app.y);
// console.log(app);
// console.log(app.z());
// let result = arr.filter((item)=>{
//      return item == 1
// })
// console.log(result);

// fs.writeFileSync("hello.txt" , "Node practice");
// console.log("-->", __dirname);
// console.log(__filename);

//  http.createServer((req , res) =>{
//      res.write("<h1>hello world</h1>");
//      res.end();
//  }).listen(4500);

//console.log(process.argv[3]);

// const input = process.argv;
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3], input[4])
// }else if (input[2] == 'remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("Invalid Input");
// }
// const { error} = require('console');
// const fs = require('fs');
// const path = require('path');
// const { setTimeout } = require('timers');
//const dirPath = path.join(__dirname, 'files');
// for(i=0; i<5; i++){
//     fs.writeFileSync(dirPath+ "/hi"+ i +".txt", "a simple text file" )
// }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("File name is ",item);
//     })
// })

// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/xyz.txt`
//fs.writeFileSync(filePath, "This is simple txt file");

// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath ,' and file name is xyz',(err)=>{
//     if(!err) console.log("file is updated");
// })

// fs.rename(filePath ,`${dirPath}/xy`, (err)=>{
//    if(!err) console.log("file name is updated");
// })

//fs.unlinkSync(`${dirPath}/xy`);

// console.log("hello...");
// setTimeout(()=>{
//     console.log("time out..");
// },2000);
// console.log("hi...");

//let a = 10;
//let b = 0;
// setTimeout(()=>{
//     b= 30;
// },5000);
// console.log(a+b);

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })
// waitingData.then((b)=>{
//     console.log(a+b);
// })