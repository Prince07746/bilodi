


var login = `
<!DOCTYPE html>
<html>
    <head>

    <title>ZARCO/login</title>
        
<link rel="icon" type="image/x-icon" href="/zarcoImages/zarco.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">



<link rel="canonical" href="">
<meta property="og:type" content="">
<meta property="og:title" content="">
<meta property="og:site_name" content="">
<meta property="og:description" content="">

<meta name="description" content="">
<meta name="keywords" content="">



<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
<link rel="stylesheet" href="/style/compcss.css?v=1.0">
<link rel="stylesheet" href="/style/phone.css?v=1.0">


<script src="/mainjs/home.js"></script>

    </head>

    <body>
        <div class="navigation">

            <div class="link">
                <a href="/"><span style="font-family:Audiowide;"><span style="color: rgb(83, 83, 247);">ZAR</span>COM</span></a>
                 <button class="btn btn-lg" id="menu-lk"><i class="fa fa-bars" id="bt"></i></button>
            </div>
        <div class="menu-link" id="menu-link">
        <a href="/">Home</a>
        <a href="/article">Article</a>
        <a href="/contact">Contact us</a>
        <a href="/about">About us</a>
        </div>
        </div>

        <section class="content">
        <style>
        
        .content{
          margin-top: 10px;
          background-image: url("/zarcoImages/zarcoim.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding: 40px;
        }
        .form input{
          width: 100%;
          height: 40px;
          border-radius: 4px;
          outline: none;
          margin-bottom: 20px;
          border: none;
        }
        .form h1{
          color: white;
        }

        </style>
       <center>
        <div class="form">
        <h1>Login</h1>
        <form action="/login" method="POST">

        <input type="email" id="Email" placeholder="  Email" name="email" required>
        <br>
        <input id="password" placeholder="  password" name="password" required>
        <br>

        <div style="display: flex; justify-content: space-between; flex-direction: column;">
        <button type="submit" class="btn btn-success btn-lg">Login</button>
        <a href="/signupRequest"><p>create an account</p></a>
        </div>
        </form>
        </div>
     </center>
        </section>

        


        <footer>
            <div class="container">
              <div class="row">
    <p>It's important to stay up to date with the latest tech news and trends, especially in such a rapidly evolving industry.</p>
<p>The website design was done by Cedex, a highly regarded design firm known for their sleek and modern aesthetic. Don't forget to follow us on social media! You can find links to our accounts by clicking on the icons on our website</p>
                <div class="col-md-4">
                  <h4>Contact Us</h4>
                  <ul class="list-unstyled">
                    <li>kampala road , 145</li>
                    <li>kamapala , central region</li>
                    <li>Phone: +256 774630649</li>
                    <li>Email: zarcoresearch13@gmail.com</li>
                    <br>
                    <li>Congo Lubumbashi</li>
                    <li>ruashi kapemba , 32</li>
                    <li>Phone: +243 993317699</li>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Follow Us</h4>
                  <ul class="list-unstyled">
                    <li><a href="http://youtube.com/@zarcom13" ><i class="fa fa-youtube" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href="https://twitter.com/zarcom13"><i class="fa fa-twitter" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href=""><i class="fa fa-facebook" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Message</h4>
                  <p>sign up or login to send direct message</p>
                  
                </div>
              </div>
            </div>
          </footer>
          
        
    </body>
</html>
`;











var loginFail = `<!DOCTYPE html>
<html>
    <head>

    <title>ZARCO/Login fail</title>
        
<link rel="icon" type="image/x-icon" href="/zarcoImages/zarco.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">



<link rel="canonical" href="">
<meta property="og:type" content="">
<meta property="og:title" content="">
<meta property="og:site_name" content="">
<meta property="og:description" content="">

<meta name="description" content="">
<meta name="keywords" content="">



<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
<link rel="stylesheet" href="/style/compcss.css?v=1.0">
<link rel="stylesheet" href="/style/phone.css?v=1.0">


<script src="/mainjs/home.js"></script>

    </head>

    <body>
        <div class="navigation">

            <div class="link">
                <a href="/"><span style="font-family:Audiowide;"><span style="color: rgb(83, 83, 247);">ZAR</span>COM</span></a>
                 <button class="btn btn-lg" id="menu-lk"><i class="fa fa-bars" id="bt"></i></button>
            </div>
        <div class="menu-link" id="menu-link">
        <a href="/">Home</a>
        <a href="/article">Article</a>
        <a href="/contact">Contact us</a>
        <a href="/about">About us</a>
        </div>
        </div>


        
        <section class="content">
        <style>
        .content{
          margin-top: 10px;
          background-image: url("/zarcoImages/zarcoim.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding: 40px;
        }
        .form{
          width: 500px;
          height: 500px;
          padding: 20px;
          background-color:  rgb(190, 185, 175);
          border-radius: 5px;
        
        }

        .form input{
          width: 100%;
          height: 50px;
          border-radius: 4px;
          outline: none;
          margin-bottom: 20px;
          border: none;
        }
        .form h1{
          color: white;
        }
@media screen and (max-width: 800px){
.form{
          width: 90%;
          height: 500px;
          padding: 20px;
          background-color:  rgb(190, 185, 175);
          border-radius: 5px;
        
        }
}
        </style>
       <center>
        <div class="form">
        <h1>Login</h1>
        <form action="/login" method="POST">

        <input type="email" id="email" placeholder="  Email" name="email" required>
        <br>
        <input id="password" placeholder="  password" name="password" required>
        <br>
        <p style="color: red">acount might not exist or password is wrong</p>
        <div style="display: flex; justify-content: space-between; flex-direction: column">
        <button type="submit" class="btn btn-success btn-lg">Login</button>
        <a href="/signupRequest"><p>create an account</p></a>
        </div>
        </form>
        </div>
     </center>
        </section>

        


        <footer>
            <div class="container">
              <div class="row">
    <p>It's important to stay up to date with the latest tech news and trends, especially in such a rapidly evolving industry.</p>
<p>The website design was done by Cedex, a highly regarded design firm known for their sleek and modern aesthetic. Don't forget to follow us on social media! You can find links to our accounts by clicking on the icons on our website</p>
                <div class="col-md-4">
                  <h4>Contact Us</h4>
                  <ul class="list-unstyled">
                    <li>kampala road , 145</li>
                    <li>kamapala , central region</li>
                    <li>Phone: +256 774630649</li>
                    <li>Email: zarcoresearch13@gmail.com</li>
                    <br>
                    <li>Congo Lubumbashi</li>
                    <li>ruashi kapemba , 32</li>
                    <li>Phone: +243 993317699</li>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Follow Us</h4>
                  <ul class="list-unstyled">
                    <li><a href="http://youtube.com/@zarcom13" ><i class="fa fa-youtube" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href="https://twitter.com/zarcom13"><i class="fa fa-twitter" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href=""><i class="fa fa-facebook" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Message</h4>
                  <p>sign up or login to send direct message</p>
                  
                </div>
              </div>
            </div>
          </footer>
          
        
    </body>
</html>
`;

var accountNotverified = `<!DOCTYPE html>
<html>
    <head>

    <title>ZARCO/Login/account not verified</title>
        
<link rel="icon" type="image/x-icon" href="/zarcoImages/zarco.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">



<link rel="canonical" href="">
<meta property="og:type" content="">
<meta property="og:title" content="">
<meta property="og:site_name" content="">
<meta property="og:description" content="">

<meta name="description" content="">
<meta name="keywords" content="">



<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
<link rel="stylesheet" href="/style/compcss.css?v=1.0">
<link rel="stylesheet" href="/style/phone.css?v=1.0">


<script src="/mainjs/home.js"></script>

    </head>

    <body>
        <div class="navigation">

            <div class="link">
                <a href="/"><span style="font-family:Audiowide;"><span style="color: rgb(83, 83, 247);">ZAR</span>COM</span></a>
                 <button class="btn btn-lg" id="menu-lk"><i class="fa fa-bars" id="bt"></i></button>
            </div>
        <div class="menu-link" id="menu-link">
        <a href="/">Home</a>
        <a href="/article">Article</a>
        <a href="/contact">Contact us</a>
        <a href="/about">About us</a>
        </div>
        </div>


        
        <section class="content">
        <style>

@media screen and (max-width: 800px){
.form{
          width: 98%;
          height: 500px;
          padding: 20px;
          background-color:  rgb(190, 185, 175);
          border-radius: 5px;
        
        }
}
        .content{
          margin-top: 10px;
          background-image: url("/zarcoImages/zarcoim.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding: 40px;
        }
@media screen and (min-width:801px){
.form{
          width: 500px;
          height: 500px;
          padding: 20px;
          background-color:  rgb(190, 185, 175);
          border-radius: 5px;
        
        }

}
        .form input{
          width: 100%;
          height: 50px;
          border-radius: 4px;
          outline: none;
          margin-bottom: 20px;
          border: none;
        }
        .form h1{
          color: white;
        }

        </style>
       <center>
        <div class="form">
        <h1>Login</h1>
        <form action="/login" method="POST">

        <input type="email" id="email" placeholder="  Email" name="email" required>
        <br>
        <input id="password" placeholder="  password" name="password" required>
        <br>
        <div style="background-color: white; border-radius: 5px;">
        <p style="color: red">account not verified</p>
        <p style="color: green;"><span style="color: red">Instruction: </span> go to Gmail click on the link</p>
        <a href="/resendMail">click to resend the activation link</a>
        </div>

        <div style="display: flex; justify-content: space-between; flex-direction: column">
        <button type="submit" class="btn btn-success btn-lg">Login</button>
        <a href="/signupRequest"><p>create an account</p></a>
        </div>
        </form>
        </div>
     </center>
        </section>

        


        <footer>
            <div class="container">
              <div class="row">
    <p>It's important to stay up to date with the latest tech news and trends, especially in such a rapidly evolving industry.</p>
<p>The website design was done by Cedex, a highly regarded design firm known for their sleek and modern aesthetic. Don't forget to follow us on social media! You can find links to our accounts by clicking on the icons on our website</p>
                <div class="col-md-4">
                  <h4>Contact Us</h4>
                  <ul class="list-unstyled">
                    <li>kampala road , 145</li>
                    <li>kamapala , central region</li>
                    <li>Phone: +256 774630649</li>
                    <li>Email: zarcoresearch13@gmail.com</li>
                    <br>
                    <li>Congo Lubumbashi</li>
                    <li>ruashi kapemba , 32</li>
                    <li>Phone: +243 993317699</li>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Follow Us</h4>
                  <ul class="list-unstyled">
                    <li><a href="http://youtube.com/@zarcom13" ><i class="fa fa-youtube" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href="https://twitter.com/zarcom13"><i class="fa fa-twitter" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href=""><i class="fa fa-facebook" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Message</h4>
                  <p>sign up or login to send direct message</p>
                  
                </div>
              </div>
            </div>
          </footer>
          
        
    </body>
</html>
`;

var loginMail = `<!DOCTYPE html>
<html>
    <head>

    <title>ZARCO/Login/resend mail</title>
        
<link rel="icon" type="image/x-icon" href="/zarcoImages/zarco.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">



<link rel="canonical" href="">
<meta property="og:type" content="">
<meta property="og:title" content="">
<meta property="og:site_name" content="">
<meta property="og:description" content="">

<meta name="description" content="">
<meta name="keywords" content="">



<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
<link rel="stylesheet" href="/style/compcss.css?v=1.0">
<link rel="stylesheet" href="/style/phone.css?v=1.0">


<script src="/mainjs/home.js"></script>

    </head>

    <body>
        <div class="navigation">

            <div class="link">
                <a href="/"><span style="font-family:Audiowide;"><span style="color: rgb(83, 83, 247);">ZAR</span>COM</span></a>
                 <button class="btn btn-lg" id="menu-lk"><i class="fa fa-bars" id="bt"></i></button>
            </div>
        <div class="menu-link" id="menu-link">
        <a href="/">Home</a>
        <a href="/article">Article</a>
        <a href="/contact">Contact us</a>
        <a href="/about">About us</a>
        </div>
        </div>


        
        <section class="content">
        <style>

       @media screen and (max-width: 800px){
.form{
          width: 90%;
          height: 500px;
          padding: 20px;
          background-color:  rgb(190, 185, 175);
          border-radius: 5px;
        
        }
}
        .content{
          margin-top: 10px;
          background-image: url("/zarcoImages/zarcoim.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding: 40px;
        }
        // is style
        .form input{
          width: 100%;
          height: 50px;
          border-radius: 4px;
          outline: none;
          margin-bottom: 20px;
          border: none;
        }
        .form h1{
          color: white;
        }

        </style>
       <center>
        <div class="form">
        <h1>Resend verification link</h1>
        <form action="/sendMailagain" method="POST">
        <p>enter your email</p>
        <input type="email" id="email" placeholder="  Email" name="email" required>
        <br>
        <br>
        
        <div style="display: flex; justify-content: space-between; flex-direction: column">
        <button type="submit" class="btn btn-success btn-lg">Send</button>
        <a href="/signupRequest"><p>create an account</p></a>
        </div>
        </form>
        </div>
     </center>
        </section>

        


        <footer>
            <div class="container">
              <div class="row">
    <p>It's important to stay up to date with the latest tech news and trends, especially in such a rapidly evolving industry.</p>
<p>The website design was done by Cedex, a highly regarded design firm known for their sleek and modern aesthetic. Don't forget to follow us on social media! You can find links to our accounts by clicking on the icons on our website</p>
                <div class="col-md-4">
                  <h4>Contact Us</h4>
                  <ul class="list-unstyled">
                    <li>kampala road , 145</li>
                    <li>kamapala , central region</li>
                    <li>Phone: +256 774630649</li>
                    <li>Email: zarcoresearch13@gmail.com</li>
                    <br>
                    <li>Congo Lubumbashi</li>
                    <li>ruashi kapemba , 32</li>
                    <li>Phone: +243 993317699</li>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Follow Us</h4>
                  <ul class="list-unstyled">
                    <li><a href="http://youtube.com/@zarcom13" ><i class="fa fa-youtube" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href="https://twitter.com/zarcom13"><i class="fa fa-twitter" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href=""><i class="fa fa-facebook" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Message</h4>
                  <p>sign up or login to send direct message</p>
                  
                </div>
              </div>
            </div>
          </footer>
          
        
    </body>
</html>
`;
var wrongAccount = `<!DOCTYPE html>
<html>
    <head>

    <title>ZARCO/Login/worn email</title>
        
<link rel="icon" type="image/x-icon" href="/zarcoImages/zarco.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">



<link rel="canonical" href="">
<meta property="og:type" content="">
<meta property="og:title" content="">
<meta property="og:site_name" content="">
<meta property="og:description" content="">

<meta name="description" content="">
<meta name="keywords" content="">



<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
<link rel="stylesheet" href="/style/compcss.css?v=1.0">
<link rel="stylesheet" href="/style/phone.css?v=1.0">


<script src="/mainjs/home.js"></script>

    </head>

    <body>
        <div class="navigation">

            <div class="link">
                <a href="/"><span style="font-family:Audiowide;"><span style="color: rgb(83, 83, 247);">ZAR</span>COM</span></a>
                 <button class="btn btn-lg" id="menu-lk"><i class="fa fa-bars" id="bt"></i></button>
            </div>
        <div class="menu-link" id="menu-link">
        <a href="/">Home</a>
        <a href="/article">Article</a>
        <a href="/contact">Contact us</a>
        <a href="/about">About us</a>
        </div>
        </div>


        
        <section class="content">
        <style>

        
        .content{
          margin-top: 10px;
          background-image: url("/zarcoImages/zarcoim.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding: 40px;
        }
        // is style
        .form input{
          width: 100%;
          height: 50px;
          border-radius: 4px;
          outline: none;
          margin-bottom: 20px;
          border: none;
        }
        .form h1{
          color: white;
        }
      
@media screen and (max-width: 800px){
.form{
          width: 90%;
          height: 500px;
          padding: 20px;
          background-color:  rgb(190, 185, 175);
          border-radius: 5px;
        
        }
}
        </style>
       <center>
        <div class="form">
        <h1>Resend verification link</h1>
        <form action="/sendMailagain" method="POST">
        <p style="color: red">wrong email enter correct email</p>
        <input type="email" id="email" placeholder="  Email" name="email" required>
        <br>
        <br>
        
        <div style="display: flex; justify-content: space-between; flex-direction: column">
        <button type="submit" class="btn btn-success btn-lg">Send</button>
        <a href="/signupRequest"><p>create an account</p></a>
        </div>
        </form>
        </div>
     </center>
        </section>

        


        <footer>
            <div class="container">
              <div class="row">
    <p>It's important to stay up to date with the latest tech news and trends, especially in such a rapidly evolving industry.</p>
<p>The website design was done by Cedex, a highly regarded design firm known for their sleek and modern aesthetic. Don't forget to follow us on social media! You can find links to our accounts by clicking on the icons on our website</p>
                <div class="col-md-4">
                  <h4>Contact Us</h4>
                  <ul class="list-unstyled">
                    <li>kampala road , 145</li>
                    <li>kamapala , central region</li>
                    <li>Phone: +256 774630649</li>
                    <li>Email: zarcoresearch13@gmail.com</li>
                    <br>
                    <li>Congo Lubumbashi</li>
                    <li>ruashi kapemba , 32</li>
                    <li>Phone: +243 993317699</li>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Follow Us</h4>
                  <ul class="list-unstyled">
                    <li><a href="http://youtube.com/@zarcom13" ><i class="fa fa-youtube" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href="https://twitter.com/zarcom13"><i class="fa fa-twitter" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href=""><i class="fa fa-facebook" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Message</h4>
                  <p>sign up or login to send direct message</p>
                  
                </div>
              </div>
            </div>
          </footer>
          
        
    </body>
</html>
`;
var confirm = `<!DOCTYPE html>
<html>
    <head>

    <title>Welcome</title>
        
<link rel="icon" type="image/x-icon" href="/zarcoImages/zarco.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">



<link rel="canonical" href="">
<meta property="og:type" content="">
<meta property="og:title" content="">
<meta property="og:site_name" content="">
<meta property="og:description" content="">

<meta name="description" content="">
<meta name="keywords" content="">



<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
<link rel="stylesheet" href="/style/compcss.css?v=1.0">
<link rel="stylesheet" href="/style/phone.css?v=1.0">


<script src="/mainjs/home.js"></script>

    </head>

    <body>
        <div class="navigation">

            <div class="link">
                <a href="/"><span style="font-family:Audiowide;"><span style="color: rgb(83, 83, 247);">ZAR</span>COM</span></a>
                 <button class="btn btn-lg" id="menu-lk"><i class="fa fa-bars" id="bt"></i></button>
            </div>
        <div class="menu-link" id="menu-link">
        <a href="/">Home</a>
        <a href="/article">Article</a>
        <a href="/contact">Contact us</a>
        <a href="/about">About us</a>
        </div>
        </div>


        
        <section class="content">
        <style>
       
        .content{
          margin-top: 10px;
          background-image: url("/zarcoImages/zarcoim.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          padding: 40px;
        }
        // is style
        .form input{
          width: 100%;
          height: 50px;
          border-radius: 4px;
          outline: none;
          margin-bottom: 20px;
          border: none;
        }
        .form h1{
          color: white;
        }

@media screen and (max-width: 800px){
.form{
          width: 90%;
          height: 500px;
          padding: 20px;
          background-color:  rgb(190, 185, 175);
          border-radius: 5px;
        
        }
}
        </style>
       <center>
        <div class="form">
        <h1 style="color: yellow;">Enjoy !</h1>
        <br>
        <br>
        <br>
        <form action="/" method="GET">
        <center>
        <button type="submit" class="btn btn-success btn-lg">Enter</button>
        </center>
        </form>
        </div>
     </center>
        </section>

        


        <footer>
            <div class="container">
              <div class="row">
    <p>It's important to stay up to date with the latest tech news and trends, especially in such a rapidly evolving industry.</p>
<p>The website design was done by Cedex, a highly regarded design firm known for their sleek and modern aesthetic. Don't forget to follow us on social media! You can find links to our accounts by clicking on the icons on our website</p>
                <div class="col-md-4">
                  <h4>Contact Us</h4>
                  <ul class="list-unstyled">
                    <li>kampala road , 145</li>
                    <li>kamapala , central region</li>
                    <li>Phone: +256 774630649</li>
                    <li>Email: zarcoresearch13@gmail.com</li>
                    <br>
                    <li>Congo Lubumbashi</li>
                    <li>ruashi kapemba , 32</li>
                    <li>Phone: +243 993317699</li>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Follow Us</h4>
                  <ul class="list-unstyled">
                  <a href="http://youtube.com/@zarcom13" ><i class="fa fa-youtube" style="font-size: 50px; color: green; margin: 10px;"></i></a>
                   <a href=""><i class="fa fa-facebook" style="font-size: 50px; color: green; margin: 10px;"></i></a>
                   <a href="https://twitter.com/zarcom13"><i class="fa fa-twitter" style="font-size: 50px; color: green; margin: 10px;"></i></a>
       
                    <li><a href="http://youtube.com/@zarcom13" ><i class="fa fa-youtube" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href="https://twitter.com/zarcom13"><i class="fa fa-twitter" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                    <li><a href=""><i class="fa fa-facebook" style="font-size: 50px; color: green; margin: 10px;"></i></a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h4>Message</h4>
                  <p>sign up or login to send direct message</p>
                  
                </div>
              </div>
            </div>
          </footer>
          
        
    </body>
</html>
`;

 module.exports = {
    login,
    loginFail,
    accountNotverified,
    loginMail,
    wrongAccount,
    confirm
}
