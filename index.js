const express = require('express');
const app = express();
const port=8000;
//to use express layout
const expressLayouts = require('express-ejs-layouts');


// to use expresslayouts
app.use(expressLayouts);

//to extract style files for other pages
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//to use static file
app.use(express.static('./assets'));

// to set up view engine
app.set('view engine','ejs');
app.set('views','./views');

//to use express router
app.use('/',require('./routers'));


app.listen(port,function(err){
    if(err){
        console.log(`error in setting server:${err}`)
    }
    console.log(`server is running on port:${port}`)
}); 