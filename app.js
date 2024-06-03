const express = require('express')
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/blog:page', (req, res) => {
    const page = req.params.page;
    res.render(`blog${page}`);
  });
app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})