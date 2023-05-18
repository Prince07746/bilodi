const express = require('express');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const { createPool } = require('generic-pool');
const ejs = require('ejs');
const cache = require('memory-cache');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const signupUser = require('./login and sign up/signup');
const loginUser = require('./login and sign up/login');
const toolsKey = require('./tools/keygen');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();
const axios = require('axios');








const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 100
});

var app = express();


app.set('view engine', 'ejs');
app.set('views', './views');


var port = process.env.PORT || 3030;



  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(compression());
app.use(helmet());
app.use(express.static('public'));  
app.use(express.static(__dirname));
app.use(express.static(__dirname+'/views'));
app.use(limiter);
app.use(bodyParser.urlencoded({ extended: true }));




const cacheMiddleware = function(req, res, next) {
  const key = '__express__' + encodeURIComponent(req.originalUrl || req.url); // encode the originalUrl value
  const cacheResponse = cache.get(key);
  if (cacheResponse) {
    res.send(cacheResponse);
    return;
  }

  res.sendResponse = res.send;
  res.send = (body) => {
    cache.put(key, body, 10000);
    res.sendResponse(body);
  };
  next();
};




    

    app.use((err, req, res, next) => {
      if (err.code === 'ENOENT') {
        console.error('File not found:', err);
        res.status(404).send('File not found');
      } else {
        console.error(err.stack);
        res.status(500).send('Internal Server Error');
      }
    });

    app.use((req, res, next) => {
      // Allow requests from any origin
      res.setHeader('Access-Control-Allow-Origin', '*');
      
      // Allow the GET method
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      
      // Allow the Content-Type header
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      
      // Allow credentials to be sent
      res.setHeader('Access-Control-Allow-Credentials', true);
      
      // Call the next middleware
      next();
    });



function sendtome(Account,message){
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'davidkitoko13@gmail.com',
        pass: 'e b a j o h d v g m e v u s u z'
    }
  });
  let mailOptions = {
    from: 'davidkitoko13@gmail.com',
    to: `${Account}`,
    subject: 'user',
    html: `${message}`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('message sent to zarcom : ' + info.response);
    }
  });
}


function sendMail(Account,comfirmkey){
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'davidkitoko13@gmail.com',
          pass: 'e b a j o h d v g m e v u s u z'
      }
    });
    let mailOptions = {
      from: 'davidkitoko13@gmail.com',
      to: `${Account}`,
      subject: 'user',
      text: `http://zarcom.herokuapp.com/verification/${comfirmkey}`
    };
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      }else{
          console.log('Email verification key sent : ' + info.response);
      }
    });
  }






app.post('/search', (req, res) => {
  const query = req.body.key1;
  console.log(query);
  
});


  

app.get('/',cacheMiddleware,function(req,res){

  res.setHeader('Content-Security-Policy', "img-src 'self' https://cdn.cnn.com data:;");
  res.render('home');

});




app.get('/privacypolicy',function(req,res){

  res.setHeader('Content-Security-Policy', "img-src 'self' https://cdn.cnn.com data:;");

    res.render('privacypolicy',{
      user: ``,
      views: ``,
      users: ``,
      linklog: ``,
      textlog: ``,
  
  
  
    });
    });
  
  




app.get('/termsconditions',function(req,res){

  res.setHeader('Content-Security-Policy', "img-src 'self' https://cdn.cnn.com data:;");
    res.render('terms&conditions',{
      user: ``,
      views: ``,
      users: ``,
      linklog: ``,
      textlog: ``,
  
  
  
    });
  
    });
  




app.get('/contact',cacheMiddleware,function(req,res){
  
  res.setHeader('Content-Security-Policy', "img-src 'self' https://cdn.cnn.com data:;");
  res.render('contact',{
    user: ``,
      views: ``,
      users: ``,
      linklog: ``,
      textlog: ``,

  });
  });


app.get('/about',cacheMiddleware,function(req,res){
  res.render('aboutuser',{
    user: ``,
      views: ``,
      users: ``,
      linklog: ``,
      textlog: ``,
  });
  });




app.get('/news/:id',cacheMiddleware,(req,res) => {

  res.setHeader('Content-Security-Policy', "img-src 'self' https://cdn.cnn.com data:;");
  const search =  decodeURIComponent(req.params.id);
  
});

        

          

app.get('/signupRequest',cacheMiddleware,function(req,res){
  
  res.setHeader('Content-Security-Policy', "img-src 'self' https://cdn.cnn.com data:;");
  res.send(`${signupUser.signup}`);

});
app.get('/loginRequest',function(req,res){
  
  res.setHeader('Content-Security-Policy', "img-src 'self' https://cdn.cnn.com data:;");
  res.send(`${loginUser.login}`);

});


app.get('/logoutRequest',cacheMiddleware, function(req, res) {
  
  res.setHeader('Content-Security-Policy', "img-src 'self' https://cdn.cnn.com data:;");
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    } else {
        res.redirect('/');
    }
  });
});

app.post('/signup',cacheMiddleware,function(req,res){
  
  req.session.reload(function(err){
  if(err){
      console.log(err);
  }
  
  const {email,password,username} = req.body;
  pool1.query(`SELECT * FROM users WHERE email = ?`,[email],function(err, results,fields){
  if(err) throw err;

  if(results.length >= 1){
      res.send(`${signupUser.signupFail}`);
  }
  else if(results.length < 1){
  var key = toolsKey.keyProd;
  pool1.query(`INSERT INTO users (username,password,email,keyuser,verification) VALUES ('${username}','${password}','${email}','${key}','FALSE')`, function (err, results, fields) {
      if (err) throw err;
      sendMail(email,key);
      res.send(`${loginUser.login}`);
      req.session.session_id = email;
    });

}
console.log('request end=/100');
})

})
});



app.get('/verification/:id', cacheMiddleware, function(req, res) {
  const url = encodeURIComponent(req.params.id); // encode the parameter value

  pool1.query(`SELECT * FROM users WHERE keyuser = '${url}'`, function(err, results, fields) {
    if (err) throw err;
    if (results.length >= 1) {
      if (results[0].verification == "TRUE") {
        const user = results[0];
          req.session.user = user;
          res.redirect('/');
      } else {
        pool1.query(`UPDATE users SET verification = 'TRUE' WHERE id = ${results[0].id};`, function(err, result) {
          if (err) throw err;
          const user = results[0];
          req.session.user = user;
          res.redirect('/');
          
        });
      }
    } else {
      res.send('link not found');
    }
  });
});


app.get('/resendMail',cacheMiddleware,function(req,res){

  res.setHeader('Content-Security-Policy', "img-src 'self' https://cdn.cnn.com data:;");
  res.send(`${loginUser.loginMail}`);

  });
  


app.post("/sendMailagain",cacheMiddleware,function(req,res){
var email = req.body.email;
pool1.query(`SELECT * FROM users WHERE email = '${email}'`,function(err, results,fields){
  if(err) throw err;
  if(results.length >= 1){
  sendMail(email,results[0].keyuser);
  res.send(`${loginUser.login}`);
  }else{
    res.send(`${loginUser.wrongAccount}`);
  }

});

})




app.post('/login',cacheMiddleware,function(req,res){
  
  const email = req.body.email;
  const password = req.body.password;
  pool1.query(`SELECT * FROM users WHERE email = '${email}'`,function(err, results,fields){
  if(err) throw err;
  if(results.length >= 1){
      if(results[0].password == `${password}` && results[0].verification == 'TRUE'){
      const user = results[0];
      req.session.user = user;
        res.send(`${loginUser.confirm}`);
      
      }
      else if(results[0].password == `${password}` && results[0].verification != 'TRUE'){
          res.send(`${loginUser.accountNotverified}`);
      }else{
        res.send(`${loginUser.loginFail}`);
      }
  }
  else if(results.length < 1){
      if (err) throw err;
      res.send(`${loginUser.loginFail}`);
  }
  console.log('request end=/100');
    });

});



app.get('/ymca07746',function(req,res){

  pool3.query(`SELECT * FROM computerscience`,function(err,subject,fields){
    if(err) throw err;
  res.render('coursemanager',{
    user: `manager`,
    sub: subject
  });

  });

  
  });
  

app.get('/0774630649',function(req,res){


res.render('manager',{user: `manager`});

});


app.post('/postnews1',function(req,res){
  
  const news = {
image : `/zarcoImages/${req.body.img}`,
title : `${req.body.title}`,
category : `${req.body.category}`,
description : `${req.body.desc}`,
url : `https://www.zarcom.herokuapp/news/${this.title}`,
 source : `zarco news ${this.category}`,
language : 'en',
country: 'world'
  }

const dateNow = new Date();
const option = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute:  'numeric'
};




const formatDate = dateNow.toLocaleString('en-US', option);
// Replace the "%" character in the news title with " percent"
const titl = news.title.replace("%", " percent");
const titlx = titl.replace('?',' .');
const title = titlx.replace(`'`,' .');
var query = `INSERT INTO news (title, url, source, image, category, language, country, published_at, description,comkey)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
if(news.image) {
  var values = [title, news.url, news.source, news.image, news.category, news.language, news.country, formatDate, news.description,codekey];
  pool1.query(query, values, function(err, result, fields) {
    if(err) throw err;
    console.log('Daily news saved');
  });
} else {
  var values = [title, news.url, news.source, `/zarcoImages/bk.png`, news.category, news.language, news.country, formatDate, news.description,codekey];
  pool1.query(query, values, function(err, result, fields) {
    if(err) throw err;
    console.log('Daily news saved');
  });
}


res.render("manager",{user: `manager`});
});



app.post('/sendmail',function(req,res){
  if(req.session.user){
  res.redirect('/');
  var message = req.body.message;
  sendtome(`davidkitoko13@gmail.com`,`<div style="width: 100%; background-color: gray; color: white; padding: 10px;">From ${req.session.user.username}</div>  ${message}`);
  }else{
    
    res.redirect('/');
  var message = req.body.message;
  sendtome(`davidkitoko13@gmail.com`,`
  <div style="width: 100%; background-color: gray; color: white; padding: 10px;">
  From Guest
  </div> 
  <div style="">
   ${message}
   </div>`);
  }


});


app.get("/zarcoImages/:id", function(req, res) {
  const imageUrl = req.params.id;
  // pool1.query(`SELECT * FROM news WHERE image = '/zarcoImages/${imageUrl}'`, function(err, result, fields) {
  /*  if (err) throw err;

    // Get the image file path from the result
    const imagePath = result[0].image;

    // Send the image file as a binary stream to the client
    res.sendFile(imagePath);
  });*/
});



app.get('/donateRequest',cacheMiddleware,function(req,res){ 

  // res.redirect('https://donate.stripe.com/test_6oE8zzaEm0kb9k49AA')
    // res.render('donate');
    res.render('donate');

  

});




app.listen(port,function(err){
    if(err){
        console.log('an error in the server');
    }
    console.log(`Server running at ${port}`);
})