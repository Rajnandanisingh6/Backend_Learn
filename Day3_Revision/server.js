//yaha par server run karne ke liye code hoga, jisme hum express ka use karenge aur apne app ko listen karwayenge kisi port par.

// const app = require('./src/app'); //app ko import kar rahe hain, jisme humne apne routes aur logic define kiya hai.


// app.listen(3000,()=>{
//     console.log("server running on port 3000");

// })






//-------------------------------------------


const app =require('./src/app'); //app ko import kar rahe hain, jisme humne apne routes aur logic define kiya hai.

app.listen(3000,()=>{
    console.log("server running on port 3000");
})
