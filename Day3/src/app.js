//server ko create krna

const express= require('express'); // express module ko import kr rhe hai

const app = express(); // server instance create kr rhe hai
app.use(express.json()) // ye ak middleware hai jo json data ko parse krta hai aur req.body me daal deta hai

const notes =[]

/*title ,description */
/* api crete kiya hai aur method post hai*/
app.post('/notes',(req,res)=>{
   // console.log(req.body)  //data body me aayega isliye req.body use kr rhe hai
   notes.push(req.body)

   res.status(201).json({
    message: "note created successfully",
   
   })

})

app.get('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(200).json({
       
        message: "notes fetched successfully",
        notes:notes
        
    })
})

/*delete /notes/:index */

app.delete('/notes/:index',(req,res)=>{

 const index =req.params.index // index ko access krne ke liye req.params.index use kr rhe hai

 delete notes[ index] // delete keyword se array ke index ko delete kr rhe hai

 res.status(200).json({
       message: "note deleted successfully",
 })

})

app.patch('/notes/:index',(req,res)=>{
    const index =req.params.index // index ko access krne ke liye req.params.index use kr rhe hai
    const description = req.body.description // description ko access krne ke liye req.body.description use kr rhe hai

    notes[index].description = description // array ke index ke description ko update kr rhe hai  
    res.status(200).json({
      message:"note updated successfully",
    })
})

/*

note ={
title: "my first note",
description: "this is my first note "
}

const notes =[
{
  title:"my first note",
  description: "this is my first note"
},
{
title:"my second note",
description: "this is my second note"
},
]


*/



module.exports = app; // app ko export kr rhe hai taki use kr ske dusre file me