const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('login', {
    title: 'Zawash',
    routeName:"home"
  });
});
router.post("/",(req,res)=>{
  console.log(req.body)
  res.send("The data has been submitted")
})

router.get('/home', (req, res) => {
  res.render('index', {
    title: 'Home',
    routeName:"home"
  });
});



module.exports = router