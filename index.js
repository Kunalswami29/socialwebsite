const express = require('express');
const app = express();
const port=8000;

app.listen(port,function(err){
    if(err){
        console.log(`error in setting server:${err}`)
    }
    console.log(`server is runningon port:${port}`)
}); //try  to run ok wait see
// see i am not getting what is he asking for? okrun these commands which it is asking git config so i have to right it in the same way? i think it shoulf be user.your name
//try to add now ok