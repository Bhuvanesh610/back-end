const express=require ("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.get("/cars",(request,response)=>{
    response.send(['suskiy','bmw'])
})

app.get("/bike",(request,response)=>{
    response.send(['KTM','Dukati'])
})
app.listen(4444,()=>{
    console.log('server start')
})