const express=require('express')

const app=express()

//https://github.com/tiprock-network/tiprockremoteinfo.git
//set view engine
app.set('view engine','ejs')

//use to server static files like images
app.use(express.static('public'))

//render main page
app.get('/',(req,res)=>{
     res.render('index')
})

const port=process.env.PORT||3400;
app.listen(port,()=>{console.log(`Listening on http://localhost/${port}...`)})