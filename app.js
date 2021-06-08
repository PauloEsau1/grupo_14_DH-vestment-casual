const express = require('express');
const path=require('path');

const app=express();
app.use(express.static('public'));
app.listen(3000,()=>{console.log("Servido")})
app.get('/',(req,res)=>{
    res.send('Hola');});
app.get('/home',(req,res)=>{
    let htmlPath1=path.join(__dirname,'./index.html');
    res.sendFile(htmlPath1);});
app.get('/carrito',(req,res)=>{
    let htmlPath2=path.join(__dirname,'./productCart.html');
    res.sendFile(htmlPath2);});
app.get('/detalle-producto',(req,res)=>{
    let htmlPath3=path.join(__dirname,'./productDetail.html');
    res.sendFile(htmlPath3);});
app.get('/registra',(req,res)=>{
    let htmlPath4=path.join(__dirname,'./register.html');
    res.sendFile(htmlPath4);});