const express= require("express")
const app= express()
const register= require("./routes/register")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",register)
const port= process.env.port || 5000

app.listen(port,()=>console.log(`server connected to ${port}`));