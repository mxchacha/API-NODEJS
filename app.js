const express= require('express');
const app= express();
const mongoose =require('mongoose');
const bodyParser=require('body-parser');


app.use(bodyParser.json());

//Import Routes
 const postsRoutes=require('./routes/posts');
 app.use('/api/empleados',postsRoutes);


//ROUTES
app.get('/',(req, res)=>{
    res.send('Hola');
});


//Connect a DB
mongoose.connect('mongodb+srv://test:12345@cluster0.bykej.mongodb.net/rest?retryWrites=true&w=majority',
{ useNewUrlParser: true,useUnifiedTopology: true  },
 ()=>
    console.log('CXonexion con DB!')
);

app.listen(3000);