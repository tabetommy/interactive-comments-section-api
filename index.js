const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');
const Models=require('./models.js');
const Users = Models.User;
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('common'));
// mongoose.connect('mongodb://localhost:27017/commentsSection', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.static('public'));

      
app.get('/', (req,res)=>{
   res.sendFile('public/index.html')
})

//get user by username
app.get('/users/:user',(req,res)=>{
    Users.findOne({username:req.params.user})
    .then(user=>res.json(user))
    .catch(err=>res.send(err))
  });

  
//create comment
app.post('/users/:user', (req, res)=>{
    Users.updateOne(
        {username:req.params.user},
        {$set:{comment:req.body.comment}},
        {multi:true}
    )
    .then(user=>res.status(201).json(user))
    .catch(err=>{
        console.log(err);
        res.status(500).send('Error' + err);
    })    
});



//update comment
app.put('/users/:user',(req,res)=>{
//find user and insert req.body into comment section of db
 Users.findOneAndUpdate(
    {username:req.params.user},
    {comment:req.body.comment},
    {new:true})
    .then(user=>res.send(user))
    .catch(err=>res.status(500).send('Error ' + err))
});


//delete comment
app.delete('/users/:user', (req,res)=>{
    Users.updateOne(
        {username:req.params.user},
        { $unset: { comment:1 } }
    )
    .then(comment=>res.json(comment))
    .catch((err)=>{
        console.log(err);
        res.status(500).send('Error' + err);
    })
});

const PORT =process.env.PORT || 3000;
app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log('comments app listening on port 3000')
});

      