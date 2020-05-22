const express = require('express');
const app = express();
const port=8000;

//to use express router
app.use('/',require('./routers'));

app.listen(port,function(err){
    if(err){
        console.log(`error in setting server:${err}`)
    }
    console.log(`server is running on port:${port}`)
}); 