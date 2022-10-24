const express = require('express')
require('dotenv').config()
const {ConnectDB}=require('./Config/ConnectDB')
const UserRouter=require('./Routes/UserRouter')
const ProductRouter=require('./Routes/ProductRouter')
const SaisieProductRouter =require('./Routes/SaisieProductRouter')
const app = express()
const path= require ('path')
const fileUpload=require('express-fileupload')

app.use(express.json({limit:'50mb'}))
app.use(fileUpload({
      useTempFiles :true,
}));
app.use('/api/users',UserRouter)
app.use('/api/products',ProductRouter)
app.use('/api/saisieproducts',SaisieProductRouter)



//set up for deployment
app.use(express.static(path.join(__dirname,'../','client','build')))
app.get('*',(req,res)=>{
      res.sendFile(path.join(__dirname,'../','client','build','index.html'))
})

ConnectDB()
const PORT=process.env.PORT

app.listen(PORT,err=> err? console.log(err):console.log(`Server connected on ${PORT}`))