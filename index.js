const express=require('express')
const app = express()
const port= 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sua2:angel1004@cluster0universe.qqukf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
).then(()=> console.log("mongo db connected"))
.catch(err=>console.log(err))

app.get('/',(req,res)=>res.send('hello world'))
app.listen(port,()=> console.log(`example app listening on port ${port}!`))

