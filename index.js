const express=require ("express")
const app=express()
app.get("/cars",(request,response)=>{
    response.send(['suskiy','bmw'])
})

app.get("/bike",(request,response)=>{
    response.send(['KTM','Dukati'])
})
app.listen(4444,()=>{
    console.log('server start')
})