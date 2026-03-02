// const express = require('express');

//  const app = express() // server instance create kr rhe hai


// app.get("/",(req,res)=>{
//     res.send("Hello rajnandani");
// })

// app.get("/about",(req,res)=>{
//     res.send("welcome to about page");
// })

//  app.listen(3000) //  server ko start krene ke liye ye method use krte hai, aur port number dete hai jaha pe server run krna hai



 //--------------------------------------
//  const express = require('express');

//  const app = express();

//  app.get("/",(req,res)=>{
//     res.send("hello backend lover");
//  });
//  app.get("/about",(req,res)=>{
//     res.send("welcome to about page everyone")
//  });


//  app.listen(3000,()=>{
//     console.log("server running on port 3000");
//  })


//-------------------------------------------------------------------------

const express = require('express');

 const app = express();

app.get("/",(req,res)=>{
    res.send("hello welcome to first express server");
});

app.get("/about",(req,res)=>{
    res.send("welcome to about page Rajnandani");
})

 app.listen(3000,()=>{
    console.log("server running on port 3000");
 })



