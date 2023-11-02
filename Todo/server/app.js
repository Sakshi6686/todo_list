const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=3000;

const cors = require('cors');
app.use(cors());
// mongoose.connect("mongodb://0.0.0.0:27017/todoDb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
  
 
//    });
//  const item= mongoose.model("item",{
//     name:String
//  })

//  const item1=new item({
//     name:"welcome1!"
//  })
//  const item2=new item({
//     name:"Hi!"
//  })
//  const item3=new item({
//     name:"Bye!"
//  })
 //const defaultItems=[item1,item2,item3]
//  item.insertMany(defaultItems).then(function(err){
//     if(err) console.log(err);
//     else console.log("success");
//  }).catch((err)=>{
//     console.log(err);
//   });

  
 


app.use(express.static("../client"));
app.use(express.json());


const items=["Buy food","Cook food","Eat food"];

app.get('/',(req,res)=>{

   
      res.json({items});
    
})

app.post('/',(req,res)=>{
    const text=req.body.Text;
    items.push(text);
    res.json({items});
    res.sendStatus(201);
})
 
  
 
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  