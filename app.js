

// request handeler
  const express = require('express');
// data transfer module within the web app
const bodyParser = require('body-parser');
// server restart

// EJS
const ejs = require('ejs');
// database module
const mysql = require('mysql');
const { createPool } = require('generic-pool');
// payement method
// sign in and sign up user 
const signupUser = require('./login and sign up/signup');
// login  and sign up user 
const loginUser = require('./login and sign up/login');
// user and common modif login and loguot button
const visbButtonLnLo = require('./login-join-logout');
// user session
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
// files modules
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
// readline-sync
const readlineSync = require('readline-sync');

// html modification
const cheerio = require('cheerio');
// middlewares for incresing the speed of the app
const cache = require('memory-cache');
const compression = require('compression');
// middlewares for securty against XSS attacks
const helmet = require('helmet');
const uuid = require('uuid');

// Generate a random nonce value

// cross origin
const cors = require('cors');

// middlewares for securty against Dos attacks
const rateLimit = require('express-rate-limit');
const { Console } = require('console');
// middlewares for protecting sensitive information
require('dotenv').config();


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



// midllewares security
// express-rate-limit against Dos attacks

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 200
});
// ======================================================================================================================

var app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
const corsOptions = {
  origin: 'https://js.stripe.com/v3/',
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));


const nonce = uuid.v4();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(compression());
app.use(helmet());
app.use(express.static(__dirname+'/pagesMain'));
app.use(express.static(__dirname+'/pageContact'));
app.use(express.static(__dirname+'/manager'));
app.use(express.static(path.join(__dirname, 'postpage')));
app.use(express.static(__dirname));
app.use(limiter);
app.use(bodyParser.urlencoded({ extended: true }));


app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error
    res.status(err.status || 500).json({
      message: err.message,
      error: err.stack,
    });
  });



// server port
var port = process.env.PORT || 3030;


// cacheMiddleware to improve speed by using caching to avoid repetitive database queries or expensive computation
// ===============================================================================================================
const cacheMiddleware = function(req,res,next){
    const key = '__express__'+ req.originalUrl || req.url;
    const cacheResponse = cache.get(key);
    if(cacheResponse){
        res.send(cacheResponse);
        return;
    }

    res.sendResponse = res.send;
    res.send = (body) => {
        cache.put(key, body, 10000);
        res.sendResponse(body);
    }
    next();
}
// ======================================================================================================================



  app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "script-src 'self' https://js.stripe.com");
    next();
  });


 


// DATABASE SETTINGS
// ======================================================================================================================
/*
function createConnection(){
    const connection = mysql.createConnection({
      host: `${process.env.host}`,
      user: `${process.env.user}`,
      password: `${process.env.password}`,
      database: `${process.env.database}`
    });
      
       return connection;
    }

    */

    /*const connection = mysql.createConnection({
      host: `localhost`,
      user: `root`,
      password: `selemani`,
      database: `codex`
    });*/

    // Create connection pool
    const pool = mysql.createPool({
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database,
     connectionLimit: 10,
  timeout: 120000 // 1 minute
    });
    
    // Test the connection pool
    pool.getConnection(function (err, connection) {
      if (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
      } else {
        console.log('Database connection established.');
        connection.release();
      }
    });
    
    // Create session store using connection pool
    const sessionStore = new MySQLStore({
      expiration: 86400000,
      createDatabaseTable: true,
      schema: {
        tableName: 'sessions',
        columnNames: {
          session_id: 'session_id',
          expires: 'expires',
          data: 'data',
        },
      },
    }, pool);
    
    // Use session middleware
    app.use(session({
      secret: 'mySecretKey',
      resave: false,
      saveUninitialized: true,
      store: sessionStore,
    }));
    
// ====================================================================================================================

// error handling
// ====================================================================================================================
app.use((err, req, res, next) => {
    if (err.code === 'ENOENT') {
      console.error('File not found:', err);
      res.status(404).send('File not found');
    } else {
      console.error(err.stack);
      res.status(500).send('Internal Server Error');
    }
  });











// page handeling  only GET REQUEST 
// --------------------------------------------------------------
// web link starter
app.get('/env',cacheMiddleware,function(req,res){
res.send(`${process.env.lastname}`);
});





app.get('/',cacheMiddleware,function(req,res){
            if(req.session.user){
              var username = req.session.user.username;
              var password = req.session.user.passwrd;
              pool.query(`SELECT * FROM user WHERE username = '${username}' AND passwrd = '${password}' `,function(err, results,fields){
                if(err) throw err;
                pool.query(`SELECT * FROM projects ORDER BY id DESC LIMIT 3;`,function(err, resultsProject,fields){
                if(err) throw err;

                pool.query(`SELECT * FROM successfull ORDER BY id DESC LIMIT 6;`,function(err, resultSuccess,fields){
                  if(err) throw err;
                  pool.query(`SELECT * FROM donation ORDER BY id DESC LIMIT 6;`,function(err, resultDonation,fields){
                    if(err) throw err;
                res.render('home',{message: `${req.session.user.username}`,account: `User account`,Project1text: `${resultsProject[0].text}`,Project1head: `${resultsProject[0].header}`,Project1description: `${resultsProject[0].description}`,Project2text: `${resultsProject[1].text}`,Project2head: `${resultsProject[1].header}`,Project2description: `${resultsProject[1].description}`,Project3text: `${resultsProject[2].text}`,Project3head: `${resultsProject[2].header}`,Project3description: `${resultsProject[2].description}`,successfull1_img: `${resultSuccess[0].image}`,successfull1_title: `${resultSuccess[0].title}`,successfull1_description: `${resultSuccess[0].description}`,successfull1_date: `${resultSuccess[0].date}`,successfull1_category: `${resultSuccess[0].category}`,successfull2_img: `${resultSuccess[1].image}`,successfull2_title: `${resultSuccess[1].title}`,successfull2_description: `${resultSuccess[1].description}`,successfull2_date: `${resultSuccess[1].date}`,successfull2_category: `${resultSuccess[1].category}`,successfull3_img: `${resultSuccess[2].image}`,successfull3_title: `${resultSuccess[2].title}`,successfull3_description: `${resultSuccess[2].description}`,successfull3_date: `${resultSuccess[2].date}`,successfull3_category: `${resultSuccess[2].category}`,successfull4_img: `${resultSuccess[3].image}`,successfull4_title: `${resultSuccess[3].title}`,successfull4_description: `${resultSuccess[3].description}`,successfull4_date: `${resultSuccess[3].date}`,successfull4_category: `${resultSuccess[3].category}`,successfull5_img: `${resultSuccess[4].image}`,successfull5_title: `${resultSuccess[4].title}`,successfull5_description: `${resultSuccess[4].description}`,successfull5_date: `${resultSuccess[4].date}`,successfull5_category: `${resultSuccess[4].category}`,successfull6_img: `${resultSuccess[5].image}`,successfull6_title: `${resultSuccess[5].title}`,successfull6_description: `${resultSuccess[5].description}`,successfull6_date: `${resultSuccess[5].date}`,successfull6_category: `${resultSuccess[5].category}`, donationNews1_img: `${resultDonation[0].image}`,donationNews1_title: `${resultDonation[0].title}`,donationNews1_description: `${resultDonation[0].description}`,donationNews1_amount: `${resultDonation[0].amount}`, donationNews2_img: `${resultDonation[1].image}`,donationNews2_title: `${resultDonation[1].title}`,donationNews2_description: `${resultDonation[1].description}`,donationNews2_amount: `${resultDonation[1].amount}`,donationNews3_img: `${resultDonation[2].image}`,donationNews3_title: `${resultDonation[2].title}`,donationNews3_description: `${resultDonation[2].description}`,donationNews3_amount: `${resultDonation[2].amount}`,donationNews4_img: `${resultDonation[3].image}`,donationNews4_title: `${resultDonation[3].title}`,donationNews4_description: `${resultDonation[3].description}`,donationNews4_amount: `${resultDonation[3].amount}`,donationNews5_img: `${resultDonation[4].image}`,donationNews5_title: `${resultDonation[4].title}`,donationNews5_description: `${resultDonation[4].description}`,donationNews5_amount: `${resultDonation[4].amount}`,donationNews6_img: `${resultDonation[5].image}`,donationNews6_title: `${resultDonation[5].title}`,donationNews6_description: `${resultDonation[5].description}`,donationNews6_amount: `${resultDonation[5].amount}`, }     );
                
                })
                })
              })
              });
                
            }else{

                pool.query(`SELECT * FROM projects ORDER BY id DESC LIMIT 3;`,function(err, resultsProject,fields){
                  if(err) throw err;
  
                  pool.query(`SELECT * FROM successfull ORDER BY id DESC LIMIT 6;`,function(err, resultSuccess,fields){
                    if(err) throw err;

                    pool.query(`SELECT * FROM donation ORDER BY id DESC LIMIT 6;`,function(err, resultDonation,fields){
                      if(err) throw err;
                  res.render('homenonuser',{Project1text: `${resultsProject[0].text}`,Project1head: `${resultsProject[0].header}`,Project1description: `${resultsProject[0].description}`,Project2text: `${resultsProject[1].text}`,Project2head: `${resultsProject[1].header}`,Project2description: `${resultsProject[1].description}`,Project3text: `${resultsProject[2].text}`,Project3head: `${resultsProject[2].header}`,Project3description: `${resultsProject[2].description}`,successfull1_img: `${resultSuccess[0].image}`,successfull1_title: `${resultSuccess[0].title}`,successfull1_description: `${resultSuccess[0].description}`,successfull1_date: `${resultSuccess[0].date}`,successfull1_category: `${resultSuccess[0].category}`,successfull2_img: `${resultSuccess[1].image}`,successfull2_title: `${resultSuccess[1].title}`,successfull2_description: `${resultSuccess[1].description}`,successfull2_date: `${resultSuccess[1].date}`,successfull2_category: `${resultSuccess[1].category}`,successfull3_img: `${resultSuccess[2].image}`,successfull3_title: `${resultSuccess[2].title}`,successfull3_description: `${resultSuccess[2].description}`,successfull3_date: `${resultSuccess[2].date}`,successfull3_category: `${resultSuccess[2].category}`,successfull4_img: `${resultSuccess[3].image}`,successfull4_title: `${resultSuccess[3].title}`,successfull4_description: `${resultSuccess[3].description}`,successfull4_date: `${resultSuccess[3].date}`,successfull4_category: `${resultSuccess[3].category}`,successfull5_img: `${resultSuccess[4].image}`,successfull5_title: `${resultSuccess[4].title}`,successfull5_description: `${resultSuccess[4].description}`,successfull5_date: `${resultSuccess[4].date}`,successfull5_category: `${resultSuccess[4].category}`,successfull6_img: `${resultSuccess[5].image}`,successfull6_title: `${resultSuccess[5].title}`,successfull6_description: `${resultSuccess[5].description}`,successfull6_date: `${resultSuccess[5].date}`,successfull6_category: `${resultSuccess[5].category}`, donationNews1_img: `${resultDonation[0].image}`,donationNews1_title: `${resultDonation[0].title}`,donationNews1_description: `${resultDonation[0].description}`,donationNews1_amount: `${resultDonation[0].amount}`, donationNews2_img: `${resultDonation[1].image}`,donationNews2_title: `${resultDonation[1].title}`,donationNews2_description: `${resultDonation[1].description}`,donationNews2_amount: `${resultDonation[1].amount}`,donationNews3_img: `${resultDonation[2].image}`,donationNews3_title: `${resultDonation[2].title}`,donationNews3_description: `${resultDonation[2].description}`,donationNews3_amount: `${resultDonation[2].amount}`,donationNews4_img: `${resultDonation[3].image}`,donationNews4_title: `${resultDonation[3].title}`,donationNews4_description: `${resultDonation[3].description}`,donationNews4_amount: `${resultDonation[3].amount}`,donationNews5_img: `${resultDonation[4].image}`,donationNews5_title: `${resultDonation[4].title}`,donationNews5_description: `${resultDonation[4].description}`,donationNews5_amount: `${resultDonation[4].amount}`,donationNews6_img: `${resultDonation[5].image}`,donationNews6_title: `${resultDonation[5].title}`,donationNews6_description: `${resultDonation[5].description}`,donationNews6_amount: `${resultDonation[5].amount}`, }     );
                  
                  })
                  });
                });
  

              
              
                
            }     
            
});




// home page get
app.get('/home',cacheMiddleware,function(req,res){

  if(req.session.user){
    var username = req.session.user.username;
    var password = req.session.user.passwrd;
    pool.query(`SELECT * FROM user WHERE username = '${username}' AND passwrd = '${password}' `,function(err, results,fields){
      if(err) throw err;
      pool.query(`SELECT * FROM projects ORDER BY id DESC LIMIT 3;`,function(err, resultsProject,fields){
      if(err) throw err;

      pool.query(`SELECT * FROM successfull ORDER BY id DESC LIMIT 6;`,function(err, resultSuccess,fields){
        if(err) throw err;
        pool.query(`SELECT * FROM donation ORDER BY id DESC LIMIT 6;`,function(err, resultDonation,fields){
          if(err) throw err;
      res.render('home',{message: `${req.session.user.username}`,account: `User account`,Project1text: `${resultsProject[0].text}`,Project1head: `${resultsProject[0].header}`,Project1description: `${resultsProject[0].description}`,Project2text: `${resultsProject[1].text}`,Project2head: `${resultsProject[1].header}`,Project2description: `${resultsProject[1].description}`,Project3text: `${resultsProject[2].text}`,Project3head: `${resultsProject[2].header}`,Project3description: `${resultsProject[2].description}`,successfull1_img: `${resultSuccess[0].image}`,successfull1_title: `${resultSuccess[0].title}`,successfull1_description: `${resultSuccess[0].description}`,successfull1_date: `${resultSuccess[0].date}`,successfull1_category: `${resultSuccess[0].category}`,successfull2_img: `${resultSuccess[1].image}`,successfull2_title: `${resultSuccess[1].title}`,successfull2_description: `${resultSuccess[1].description}`,successfull2_date: `${resultSuccess[1].date}`,successfull2_category: `${resultSuccess[1].category}`,successfull3_img: `${resultSuccess[2].image}`,successfull3_title: `${resultSuccess[2].title}`,successfull3_description: `${resultSuccess[2].description}`,successfull3_date: `${resultSuccess[2].date}`,successfull3_category: `${resultSuccess[2].category}`,successfull4_img: `${resultSuccess[3].image}`,successfull4_title: `${resultSuccess[3].title}`,successfull4_description: `${resultSuccess[3].description}`,successfull4_date: `${resultSuccess[3].date}`,successfull4_category: `${resultSuccess[3].category}`,successfull5_img: `${resultSuccess[4].image}`,successfull5_title: `${resultSuccess[4].title}`,successfull5_description: `${resultSuccess[4].description}`,successfull5_date: `${resultSuccess[4].date}`,successfull5_category: `${resultSuccess[4].category}`,successfull6_img: `${resultSuccess[5].image}`,successfull6_title: `${resultSuccess[5].title}`,successfull6_description: `${resultSuccess[5].description}`,successfull6_date: `${resultSuccess[5].date}`,successfull6_category: `${resultSuccess[5].category}`, donationNews1_img: `${resultDonation[0].image}`,donationNews1_title: `${resultDonation[0].title}`,donationNews1_description: `${resultDonation[0].description}`,donationNews1_amount: `${resultDonation[0].amount}`, donationNews2_img: `${resultDonation[1].image}`,donationNews2_title: `${resultDonation[1].title}`,donationNews2_description: `${resultDonation[1].description}`,donationNews2_amount: `${resultDonation[1].amount}`,donationNews3_img: `${resultDonation[2].image}`,donationNews3_title: `${resultDonation[2].title}`,donationNews3_description: `${resultDonation[2].description}`,donationNews3_amount: `${resultDonation[2].amount}`,donationNews4_img: `${resultDonation[3].image}`,donationNews4_title: `${resultDonation[3].title}`,donationNews4_description: `${resultDonation[3].description}`,donationNews4_amount: `${resultDonation[3].amount}`,donationNews5_img: `${resultDonation[4].image}`,donationNews5_title: `${resultDonation[4].title}`,donationNews5_description: `${resultDonation[4].description}`,donationNews5_amount: `${resultDonation[4].amount}`,donationNews6_img: `${resultDonation[5].image}`,donationNews6_title: `${resultDonation[5].title}`,donationNews6_description: `${resultDonation[5].description}`,donationNews6_amount: `${resultDonation[5].amount}`, }     );
      
      })
      })
    })
    });
      
  }else{

      pool.query(`SELECT * FROM projects ORDER BY id DESC LIMIT 3;`,function(err, resultsProject,fields){
        if(err) throw err;

        pool.query(`SELECT * FROM successfull ORDER BY id DESC LIMIT 6;`,function(err, resultSuccess,fields){
          if(err) throw err;

          pool.query(`SELECT * FROM donation ORDER BY id DESC LIMIT 6;`,function(err, resultDonation,fields){
            if(err) throw err;
        res.render('homenonuser',{Project1text: `${resultsProject[0].text}`,Project1head: `${resultsProject[0].header}`,Project1description: `${resultsProject[0].description}`,Project2text: `${resultsProject[1].text}`,Project2head: `${resultsProject[1].header}`,Project2description: `${resultsProject[1].description}`,Project3text: `${resultsProject[2].text}`,Project3head: `${resultsProject[2].header}`,Project3description: `${resultsProject[2].description}`,successfull1_img: `${resultSuccess[0].image}`,successfull1_title: `${resultSuccess[0].title}`,successfull1_description: `${resultSuccess[0].description}`,successfull1_date: `${resultSuccess[0].date}`,successfull1_category: `${resultSuccess[0].category}`,successfull2_img: `${resultSuccess[1].image}`,successfull2_title: `${resultSuccess[1].title}`,successfull2_description: `${resultSuccess[1].description}`,successfull2_date: `${resultSuccess[1].date}`,successfull2_category: `${resultSuccess[1].category}`,successfull3_img: `${resultSuccess[2].image}`,successfull3_title: `${resultSuccess[2].title}`,successfull3_description: `${resultSuccess[2].description}`,successfull3_date: `${resultSuccess[2].date}`,successfull3_category: `${resultSuccess[2].category}`,successfull4_img: `${resultSuccess[3].image}`,successfull4_title: `${resultSuccess[3].title}`,successfull4_description: `${resultSuccess[3].description}`,successfull4_date: `${resultSuccess[3].date}`,successfull4_category: `${resultSuccess[3].category}`,successfull5_img: `${resultSuccess[4].image}`,successfull5_title: `${resultSuccess[4].title}`,successfull5_description: `${resultSuccess[4].description}`,successfull5_date: `${resultSuccess[4].date}`,successfull5_category: `${resultSuccess[4].category}`,successfull6_img: `${resultSuccess[5].image}`,successfull6_title: `${resultSuccess[5].title}`,successfull6_description: `${resultSuccess[5].description}`,successfull6_date: `${resultSuccess[5].date}`,successfull6_category: `${resultSuccess[5].category}`, donationNews1_img: `${resultDonation[0].image}`,donationNews1_title: `${resultDonation[0].title}`,donationNews1_description: `${resultDonation[0].description}`,donationNews1_amount: `${resultDonation[0].amount}`, donationNews2_img: `${resultDonation[1].image}`,donationNews2_title: `${resultDonation[1].title}`,donationNews2_description: `${resultDonation[1].description}`,donationNews2_amount: `${resultDonation[1].amount}`,donationNews3_img: `${resultDonation[2].image}`,donationNews3_title: `${resultDonation[2].title}`,donationNews3_description: `${resultDonation[2].description}`,donationNews3_amount: `${resultDonation[2].amount}`,donationNews4_img: `${resultDonation[3].image}`,donationNews4_title: `${resultDonation[3].title}`,donationNews4_description: `${resultDonation[3].description}`,donationNews4_amount: `${resultDonation[3].amount}`,donationNews5_img: `${resultDonation[4].image}`,donationNews5_title: `${resultDonation[4].title}`,donationNews5_description: `${resultDonation[4].description}`,donationNews5_amount: `${resultDonation[4].amount}`,donationNews6_img: `${resultDonation[5].image}`,donationNews6_title: `${resultDonation[5].title}`,donationNews6_description: `${resultDonation[5].description}`,donationNews6_amount: `${resultDonation[5].amount}`, }     );
        
        })
        });
      });


    
    
      
  }
    
 

})


// contact page get
app.get('/Contact',cacheMiddleware,function(req,res){
    if(req.session.user){
            res.render('contact');
            req.session.cookie.file = path.join(__dirname,'pageContact','contact.html');
    }else{
      res.render('contactnonuser');
      req.session.cookie.file = path.join(__dirname,'pageContact','contact.html');
    }
        
})
// about page get
app.get('/About',cacheMiddleware,function(req,res){
    if(req.session.user){
        res.render('about');
        req.session.cookie.file = 'about.ejs';
}else{
   res.render('aboutnonuser');
}
    
});


app.get('/news/:id',cacheMiddleware,(req,res) => {
var search = req.params.id;

pool.query(`SELECT * FROM successfull WHERE title LIKE '${search}' `,function(err,result,fields){
if(err) throw err;

pool.query(`SELECT * FROM successfull ORDER BY id DESC LIMIT 6;`,function(err, resultSuccess,fields){
  if(err) throw err;
res.render('news',{imageNews: `${result[0].image}`,title: `${search}`,titleNews:`${result[0].title}`,date: `${result[0].date}`,description: `${result[0].description}`,more: `${result[0].more}`,successfull1_img: `${resultSuccess[0].image}`,successfull1_title: `${resultSuccess[0].title}`,successfull1_description: `${resultSuccess[0].description}`,successfull1_date: `${resultSuccess[0].date}`,successfull1_category:`${resultSuccess[0].category}`,successfull2_img: `${resultSuccess[1].image}`,successfull2_title:`${resultSuccess[1].title}`,successfull2_description: `${resultSuccess[1].description}`,successfull2_date: `${resultSuccess[1].date}`,successfull2_category: `${resultSuccess[1].category}`,successfull3_img: `${resultSuccess[2].image}`,successfull3_title: `${resultSuccess[2].title}`,successfull3_description: `${resultSuccess[2].description}`,successfull3_date: `${resultSuccess[2].date}`,successfull3_category: `${resultSuccess[2].category}`,successfull4_img: `${resultSuccess[3].image}`,successfull4_title: `${resultSuccess[3].title}`,successfull4_description: `${resultSuccess[3].description}`,successfull4_date: `${resultSuccess[3].date}`,successfull4_category: `${resultSuccess[3].category}`,successfull5_img:`${resultSuccess[4].image}`,successfull5_title: `${resultSuccess[4].title}`,successfull5_description: `${resultSuccess[4].description}`,successfull5_date:`${resultSuccess[4].date}`,successfull5_category: `${resultSuccess[4].category}`,successfull6_img: `${resultSuccess[5].image}`,successfull6_title: `${resultSuccess[5].title}`,successfull6_description: `${resultSuccess[5].description}`,successfull6_date: `${resultSuccess[5].date}`,successfull6_category: `${resultSuccess[5].category}`,})
})
})
});


app.get('/donation/:id',cacheMiddleware,(req,res) => {
var search = req.params.id;

pool.query(`SELECT * FROM donation WHERE LOWER(title) LIKE '${search}' `,function(err,result,fields){
if(err) throw err;

pool.query(`SELECT * FROM successfull ORDER BY id DESC LIMIT 6;`,function(err, resultSuccess,fields){
  if(err) throw err;
  const dateNow = new Date();
  const option = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute:  'numeric',
    second: 'numeric',
    timeZone: 'UTC'
  };
  const formatDate = dateNow.toLocaleString('en-US',option);
res.render('news',{imageNews: `${result[0].image}`,title: `${search}`,titleNews: `${result[0].title} ${result[0].amount}$`,date: `${formatDate}`,more: `${result[0].more}`,description: `${result[0].description}`,successfull1_img: `${resultSuccess[0].image}`,successfull1_title: `${resultSuccess[0].title}`,successfull1_description: `${resultSuccess[0].description}`,successfull1_date: `${resultSuccess[0].date}`,successfull1_category: `${resultSuccess[0].category}`,successfull2_img: `${resultSuccess[1].image}`,successfull2_title: `${resultSuccess[1].title}`,successfull2_description: `${resultSuccess[1].description}`,successfull2_date: `${resultSuccess[1].date}`,successfull2_category: `${resultSuccess[1].category}`,successfull3_img: `${resultSuccess[2].image}`,successfull3_title: `${resultSuccess[2].title}`,successfull3_description: `${resultSuccess[2].description}`,successfull3_date: `${resultSuccess[2].date}`,successfull3_category: `${resultSuccess[2].category}`,successfull4_img: `${resultSuccess[3].image}`,successfull4_title: `${resultSuccess[3].title}`,successfull4_description: `${resultSuccess[3].description}`,successfull4_date: `${resultSuccess[3].date}`,successfull4_category: `${resultSuccess[3].category}`,successfull5_img: `${resultSuccess[4].image}`,successfull5_title: `${resultSuccess[4].title}`,successfull5_description: `${resultSuccess[4].description}`,successfull5_date: `${resultSuccess[4].date}`,successfull5_category: `${resultSuccess[4].category}`,successfull6_img: `${resultSuccess[5].image}`,successfull6_title: `${resultSuccess[5].title}`,successfull6_description: `${resultSuccess[5].description}`,successfull6_date: `${resultSuccess[5].date}`,successfull6_category: `${resultSuccess[5].category}`})

})
});
});



// ----------------------------------------------------------------
// acces form IU interface user
app.get('/manager',cacheMiddleware,function(req,res){ 
        if(req.session.user){
            res.render('webManager');
        }else{
            res.send('Unauthorised user');
        }
    
});






app.get('/signupRequest',function(req,res){
   res.send(`${signupUser.signup}`);

});


app.get('/loginRequest',function(req,res){
   res.send(`${loginUser.login}`);

});


app.get('/logoutRequest', function(req, res) {
    req.session.destroy(function(err) {
      if (err) {
        console.log(err);
      } else {

        pool.query(`SELECT * FROM projects ORDER BY id DESC LIMIT 3;`,function(err, resultsProject,fields){
          if(err) throw err;

          pool.query(`SELECT * FROM successfull ORDER BY id DESC LIMIT 6;`,function(err, resultSuccess,fields){
            if(err) throw err;
            pool.query(`SELECT * FROM donation ORDER BY id DESC LIMIT 6;`,function(err, resultDonation,fields){
              if(err) throw err;
          res.render('homenonuser',{Project1text: `${resultsProject[0].text}`,Project1head: `${resultsProject[0].header}`,Project1description: `${resultsProject[0].description}`,Project2text: `${resultsProject[1].text}`,Project2head: `${resultsProject[1].header}`,Project2description: `${resultsProject[1].description}`,Project3text: `${resultsProject[2].text}`,Project3head: `${resultsProject[2].header}`,Project3description: `${resultsProject[2].description}`,successfull1_img: `${resultSuccess[0].image}`,successfull1_title: `${resultSuccess[0].title}`,successfull1_description: `${resultSuccess[0].description}`,successfull1_date: `${resultSuccess[0].date}`,successfull1_category: `${resultSuccess[0].category}`,successfull2_img: `${resultSuccess[1].image}`,successfull2_title: `${resultSuccess[1].title}`,successfull2_description: `${resultSuccess[1].description}`,successfull2_date: `${resultSuccess[1].date}`,successfull2_category: `${resultSuccess[1].category}`,successfull3_img: `${resultSuccess[2].image}`,successfull3_title: `${resultSuccess[2].title}`,successfull3_description: `${resultSuccess[2].description}`,successfull3_date: `${resultSuccess[2].date}`,successfull3_category: `${resultSuccess[2].category}`,successfull4_img: `${resultSuccess[3].image}`,successfull4_title: `${resultSuccess[3].title}`,successfull4_description: `${resultSuccess[3].description}`,successfull4_date: `${resultSuccess[3].date}`,successfull4_category: `${resultSuccess[3].category}`,successfull5_img: `${resultSuccess[4].image}`,successfull5_title: `${resultSuccess[4].title}`,successfull5_description: `${resultSuccess[4].description}`,successfull5_date: `${resultSuccess[4].date}`,successfull5_category: `${resultSuccess[4].category}`,successfull6_img: `${resultSuccess[5].image}`,successfull6_title: `${resultSuccess[5].title}`,successfull6_description: `${resultSuccess[5].description}`,successfull6_date: `${resultSuccess[5].date}`,successfull6_category: `${resultSuccess[5].category}`,donationNews1_img: `${resultDonation[0].image}`,donationNews1_title: `${resultDonation[0].title}`,donationNews1_description: `${resultDonation[0].description}`,donationNews1_amount: `${resultDonation[0].amount}`, donationNews2_img: `${resultDonation[1].image}`,donationNews2_title: `${resultDonation[1].title}`,donationNews2_description: `${resultDonation[1].description}`,donationNews2_amount: `${resultDonation[1].amount}`,donationNews3_img: `${resultDonation[2].image}`,donationNews3_title: `${resultDonation[2].title}`,donationNews3_description: `${resultDonation[2].description}`,donationNews3_amount: `${resultDonation[2].amount}`,donationNews4_img: `${resultDonation[3].image}`,donationNews4_title: `${resultDonation[3].title}`,donationNews4_description: `${resultDonation[3].description}`,donationNews4_amount: `${resultDonation[3].amount}`,donationNews5_img: `${resultDonation[4].image}`,donationNews5_title: `${resultDonation[4].title}`,donationNews5_description: `${resultDonation[4].description}`,donationNews5_amount: `${resultDonation[4].amount}`,donationNews6_img: `${resultDonation[5].image}`,donationNews6_title: `${resultDonation[5].title}`,donationNews6_description: `${resultDonation[5].description}`,donationNews6_amount: `${resultDonation[5].amount}`,   }     );
          
          });
          });
        });




      }
    });
  });




// PAGE HANDLER ONLY POST REQUEST


app.post('/signup',function(req,res){
    req.session.reload(function(err){
    if(err){
        console.log(err)
    }
    
    const {email,password} = req.body;
    pool.query(`SELECT * FROM user WHERE username = ?`,[email],function(err, results,fields){
    if(err) throw err;

    if(results.length >= 1){
        res.send(`${signupUser.signupFail}`);
    }
    else if(results.length < 1){

    pool.query(`INSERT INTO user (username,passwrd) VALUES ('${email}','${password}')`, function (err, results, fields) {
        if (err) throw err;
        res.send(`${loginUser.login}`);
        req.session.session_id = email;
      });

}
console.log('request end=/100');
})

})
});





app.post('/login',function(req,res){
    
    const {email,password} = req.body;
    pool.query(`SELECT * FROM user WHERE username = ?`,[email],function(err, results,fields){
    if(err) throw err;
    const user = results[0];
    if(results.length >= 1){
        if(results[0].passwrd == `${password}`){
        req.session.user = user;
        res.redirect('/');
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

    
})














// =====================================================================================================================
// =====================================================================================================================


// app news creation from the manager IU interface user
// ----------------------------------------------------------------------
app.post('/news',function(req,res){

    var image = req.body.img;
    var title = req.body.title;
    var desc = req.body.desc;
    var category = req.body.category;
    var more = req.body.more;
    const query = `
  INSERT INTO successfull (image, title, description, category, more)
  VALUES (?, ?, ?, ?, ?)
`;

const values = [image, title, desc, category, more];
    
    pool.query(query,values,function(err,result,fields){
      if(err) throw err;
      console.log('news foundaraing save succefully in successfull table');
      res.render('webManager');
    })
    
        });
app.post('/donationNews',function(req,res){

    var image = req.body.img;
    var title = req.body.title;
    var desc = req.body.desc;
    var amount = req.body.amount;
    const more = req.body.more;
    const query = `
    INSERT INTO donation (image, title, description, amount, more)
  VALUES (?, ?, ?, ?, ?)
`;

const values = [image, title, desc, amount, more];

    pool.query(query,values,function(err,result,fields){
      if(err) throw err;
      console.log('news of donation saved succefull in donation table');
      res.render('webManager');
    })
    
        });

        app.post('/saveProject',function(req,res){
          const text = req.body.text;
          const head = req.body.head;
          const description = req.body.description;
          const more = req.body.more;
          const query = `
          INSERT INTO projects (text, header, description, more)
        VALUES (?, ?, ?, ?)
      `;
      
      const values = [text , head, description, more];
      
          pool.query(query,values,function(err,results){
           if(err) throw err;
           console.log('project saved');
           res.render('webManager');
          })
         })
    


        
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// payement supprt
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



app.get('/donateRequest',cacheMiddleware,function(req,res){ 
  if(req.session.user){
  // res.redirect('https://donate.stripe.com/test_6oE8zzaEm0kb9k49AA')
    // res.render('donate');
    res.render('donate');

  }else{

      res.render('donatenonUser');
  }

});






app.listen(port,function(err){
    if(err){
        
        console.log('server error');
    }
    console.log(`server  running at ${port}`);
    console.log('connect sent=100 bts /  received=100 bts');
});





