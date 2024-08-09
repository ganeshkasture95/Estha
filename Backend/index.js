import cors from "cors";
import express from "express";
import Budhism from "./Budhism.js";
import sikhismGurudwara from "./Sikhism.js";
import church from "./church.js";
import masjids from "./masjids.js";
import temples from "./temple.js";

const app = express()
app.use(cors())


app.get("/temples",(req,res)=>{
    res.send(temples)
})


app.get("/masjid",(req,res)=>{
    res.send(
       masjids
    )
})

app.get("/budhism",(req,res)=>{
    res.send(
        Budhism

    )
})

app.get("/christianity",(req,res)=>{
    res.send(church)
})

app.get("/sikhism",(req,res)=>{
    res.send(sikhismGurudwara)
})





app.listen(5000,()=>{
    console.log("app is running ")
})
