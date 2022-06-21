const express=require('express'),
      app=express();

app.get('/',(req,res)=>{
    res.send("Hellloooo world!")
});

app.listen(3000,()=>console.log('comments app listening on port 3000'))
      