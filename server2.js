import express from "express";

const app = express()

const PORT = process.env.PORT || 2020

const server = app.listen(PORT,()=>console.log(`🔥Corriendo en el puerto ${PORT}`) )

app.get('/',(req,res) => {
    res.send('ok desde server 2🏳️‍🌈')
})