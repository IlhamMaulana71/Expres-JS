const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// template engine setup
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res) => {
    res.render('home.ejs')
})

app.get('/about',(req,res) => {
    res.render('about.ejs')
})

app.get('/service',(req,res) => {
    res.render('service.ejs')
})

app.get('/popular',(req,res) => {
    res.render('popular.ejs')
})

app.get('/settings',(req,res) => {
    res.render('settings.ejs')
})

app.get('/*',(req,res) => {
    res.send('404, page ini gaada!')
})

app.listen(3000,() =>console.log('Server:http://localhost:3000'))