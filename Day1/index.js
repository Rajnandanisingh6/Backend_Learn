//console.log("Hello Rajnandani");

// const http = require("http");

// const server = http.createServer((req,res)=>{
//     res.write("welcome Rajnandani to Backend world");
//     res.end();
// });

// server.listen(3000,()=>{
//     console.log("server running on port 3000");
// })




//-------------------------------------------

//Revision

const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("hello backend lover");
    res.write("welcome to backend world");
    res.end();
});

server.listen(3000,()=>{
    console.log("server running on port 3000");
});