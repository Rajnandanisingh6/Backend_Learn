// //yaha server create hoga

// const express = require('express'); //express module ko import kar rahe hain, jisse hum apna server create kar sakte hain.


// const app =  express(); //server instance create kar rahe hain

// app.use(express.json()); //ye ek middleware hai, jo incoming request ke body ko json format me parse kar deta hai, jisse hum req.body me access kar sakte hain.

// const notes =[] //ye ek array hai, jisme hum apne notes ko store karenge.

// /*title ,description */
// /*api create kiya aur method post hai */

// app.post('/notes',(req,res)=>{
//    // console.log(req.body) //data body me aayega isliye req.body use kar rahe hain
//    notes.push(req.body) //notes array me req.body ko push kar rahe hain, jisme note ka data hoga.

//    res.status(201).json({
//     message :"note created successfully",
//    })
// })

// app.get('/notes',(req,res)=>{
//     notes.push(req.body)

//     res.status(200).json({
//         message:"notes fetched successfully",
//         notes:notes //notes array ko response me bhej rahe hain, jisme saare notes honge. do bar notes:notes likhne ka matlab hai ki response me ek property hogi jiska naam notes hoga aur uski value notes array hogi.
//     })
// })

// /*delete /notes/:index */

// app.delete('/notes/:index',(req,res)=>{
//     const index = req.params.index //index ko access karne ke liye req.params.index use kar rahe hain, jisme :index se index value aayegi.

// delete notes[index] //delete keyword se array ke index ko delete kar rahe hain, jisse wo note delete ho jayega.

//  res.status(200).json({
//     message:"note deleted succesfully",

// })

// })

// /*update /notes/:index */

// app.patch('/notes/:index',(req,res)=>{
//     const index =req.params.index //index ko access karne ke liye req.params.index use kar rahe hain, jisme :index se index value aayegi.
//     const description = req.body.description //description ko access karne ke liye req.body.description use kar rahe hain, jisme note ka updated description aayega.

//     notes[index].description =description //array ke index ke description ko update kar rahe hain, jisse wo note update ho jayega.

//     res.status(200).json({
//         message:"note updated successfully",
//     })
// })






// module.exports = app; //app ko export kar rahe hain, jisse hum apne server.js file me use kar sakein.


//------------------------------------------------------------------------------------------------


//server create hoga
const express = require('express');

const app = express();

app.use(express.json()); //ye ek middleware hai, jo incoming request ke body ko json format me parse kar deta hai, jisse hum req.body me access kar sakte hain.

const notes =[] //ye ek array hai, jisme hum apne notes ko store karenge.

/*title ,description */
/*api create kiya aur method post hai */

app.post('/notes',(req,res)=>{
    // console.log(req.body) //data body me aayega isliye req.body use kar rahe hain
    notes.push(req.body) //notes array me req.body ko push kar rahe hain, jisme note ka data hoga.

    res.status(201).json({
        message:"notes created successfully",
    })
})

app.get('/notes',(req,res)=>{
    notes.push(req.body)

    res.status(200).json({
        message:"note fetched succesfully",
        notes:notes
    })
})

/*delete /notes/:index */
app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index //index ko access karne ke liye req.params.index use kar rahe hain, jisme :index se index value aayegi.

    delete notes[ index] //delete keyword se array ke index ko delete kar rahe hain, jisse wo note delete ho jayega.

    res.status(200).json({
        message:"note deleted succefully",
    })
})

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const description = req.body.description
    const title = req.body.title


    
    notes[index].description = description //ye array ke index ke description ko update kar rahe hain, jisse wo note update ho jayega.
    notes[index].title = title //ye array ke index ke title ko update kar rahe hain, jisse wo note update ho jayega.

    res.status(200).json({
        message:"note updated succesfully",
    })


})



module.exports = app;