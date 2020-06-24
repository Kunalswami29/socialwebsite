const development = {
    name:'development',
    asset_path:'./assets',
    session_cookie_key : 'blahsomething',
    db :'codeial_development',
    smtp : {
        service:'gmail',
        host :'smtp.gmail.com',
        port : 587,
        secure: false,
        auth:{       /// here users mail id from which we need to send the mail
            user: 'kunalswami29@gmail.com', //users email id
            pass: '*******'    // for now password is hide use when required
        }     
    },
    google_client_ID:"500370662340-oovgvfsm329lh7ba0bj4nouqrgeeaidb.apps.googleusercontent.com",
    google_client_Secret:"r9MY_SNgS95pdYVAqGUzaGZs",
    google_call_back_URL: "http://localhost:8000/users/auth/google/callback",

    jwt_secret : 'codieal',

};
const production = {
    name:'production',
    asset_path:process.env.CODEIAL_ASSET_PATH,
    session_cookie_key : 'blahsomething',
    db :'codeial_development',
    smtp : {
        service:'gmail',
        host :'smtp.gmail.com',
        port : 587,
        secure: false,
        auth:{       /// here users mail id from which we need to send the mail
            user: 'kunalswami29@gmail.com', //users email id
            pass: '*******'    // for now password is hide use when required
        }     
    },
    google_client_ID:"500370662340-oovgvfsm329lh7ba0bj4nouqrgeeaidb.apps.googleusercontent.com",
    google_client_Secret:"r9MY_SNgS95pdYVAqGUzaGZs",
    google_call_back_URL: "http://localhost:8000/users/auth/google/callback",

    jwt_secret : 'codieal',
}
    module.exports= development;