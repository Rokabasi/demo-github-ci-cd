const express = require('express');
const path = require('path');
const app = express()
const PORT = 8000;

//EJS
// app.set('views', './views')
app.set('view engine', 'ejs')

//app.use('/assets', express.static(path.join(__dirname),'/assets'))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.get('/', (req,res)=>{
    res.render('index');
})
app.get('/add-user', (req,res) => {
    res.render('add-user')
})
app.get('/update-user', (req,res) => {
    res.render('update-user')
})


app.listen(PORT , ()=>{
    console.log(`My server is running on http://localhost:${PORT}`);
});