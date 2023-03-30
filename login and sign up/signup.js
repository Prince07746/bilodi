const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b3b86034d97059',
  password: '5157a6c3',
  database: 'heroku_2073bff5db0dcc9',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

















var signup = `<!DOCTYPE html>
<html>
<head>
	<title>Sign Up</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    

    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">



	<style>
		body {
			margin: 0;
			padding: 0;
			background-color: #d3e3c4;
			font-family: Arial, sans-serif;
		}





        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');







        :root{
          --main-color: rgb(11, 10, 17);
          --text-color: rgb(255, 255, 255);
          --font: 'Nunito', sans-serif;
          --principal: rgb(247, 210, 4);
          --head:  rgb(53, 47, 47);
          --black: black;
      }
      
      *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      
      
      li a{
        font-family: var(--font);
        text-decoration: none;
        color: white;
      }
      
      html::-webkit-scrollbar{
        width: 3px;
        }
        html::-webkit-scrollbar-thumb{
        background: rgb(81, 81, 141);
        }
        html::-webkit-scrollbar-track{
        background: white;
        }
        
      
      body{
          height: 400px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .blur {
          background-image: url("/bilodiImages/charity2.jpg");
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: -1;
          background-size: cover;
          background-attachment: fixed;
          filter: blur(5px);
        }
      
        .list-one{
          color: rgb(31, 187, 31);
          font-size: medium;
          font-weight: bolder;
        }
        #nav-bar{
          color: white;
          padding: 8px;
          opacity: 85%;
          background-color: black;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        
        .nav-bar li{
          font-weight: bold;
          text-decoration: none;
          list-style:lower-greek;
        }
        .nav-bar li a:hover{
          color: rgb(11, 155, 11);
          transform: scale(.9);
          transition-duration: 0.6s;
          cursor: pointer;
          text-decoration: none;
      
        }
      
      .nav-bar ul{
          display: flex;
          justify-content: space-arround;
      }
      
      .nav-bar li{
          list-style: none;
          margin-right: 25px;
          float: right;
          text-decoration: none;
      }
      #button-top {
        display: flex;
         flex-direction: row;
      }
      #button-top form{
        margin-left: 10px;
      }
      







		.container {
			max-width: 800px;
      height: auto;
			margin-top: 20px;
			margin-bottom: 20px;
			padding: 20px;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 10px rgba(0,0,0,0.2);
      transform: scale(.7)
		}

		h1 {
			text-align: center;
			color: #2c3e50;
		}

		#form-signup {
			margin-top: 20px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}

		input[type="text"], input[type="password"] {
			width: 100%;
			padding: 10px;
			margin: 10px 0;
			border: none;
			border-radius: 5px;
			box-shadow: 0 0 5px rgba(0,0,0,0.2);
		}

		input[type="submit"] {
			background-color: #2ecc71;
			color: #fff;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			box-shadow: 0 0 5px rgba(0,0,0,0.2);
			transition: background-color 0.2s ease;
		}

		input[type="submit"]:hover {
			background-color: #27ae60;
		}
        #form-signup{
            display: flex;
            flex-direction: column;
        }
.footer-page{
    margin-top: 20px;
    background-image: url('/bilodiImages/bk.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  footer {
    padding: 20px;
    font-family: Arial;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-left {
    flex-basis: 70%;
  }
  
  .footer-left h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: red;
  }
  
  .footer-left p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
  }
  
  .footer-right {
    flex-basis: 30%;
    display: flex;
    justify-content: flex-end;
  }
  
  .footer-right button {
    background-color: #0072c6;
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 20px auto 0;
  }
  
  .footer-bottom-left h4,
  .footer-bottom-middle h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .footer-bottom-left p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 0;
  }
  
  .footer-bottom-middle ul,
  .footer-bottom-right ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-bottom-middle li,
  .footer-bottom-right li {
    margin-bottom: 10px;
  }
  
  .footer-bottom-middle a,
  .footer-bottom-right a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
  }
  
  
  .footer2 {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer2 a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }
  
  .footer2 a:last-of-type {
    margin-right: 0;
  }
  
  .footer2 form {
    display: flex;
    align-items: center;
  }
  
  .footer2 label {
    margin-right: 10px;
    font-size: 14px;
  }
  
  .footer2 input[type="email"] {
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
    border: none;
    margin-right: 10px;
  }
  
  .footer2 button {
    background-color: #0072c6;
    color: #fff;
    font-size: 14px;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  

		@media screen and (max-width: 800px) {

			input[type="text"], input[type="password"], input[type="submit"] {
				width: 50%; 
			}



            .footer-page{
                position: relative;
                background-image: url('/bilodiImages/bk.png');
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
              }
          
            .footer-container {
            display: block;
            color: green;
            }
            
            .footer-left {
            margin-bottom: 20px;
            }
            
            .footer-right {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            }
            
            .footer-right button {
            padding: 10px;
            }
            
            .footer-bottom {
            flex-wrap: wrap;
            }
            
            .footer-bottom-left,
            .footer-bottom-middle,
            .footer-bottom-right {
            width: 100%;
            margin-bottom: 20px;
            }
            
            .footer-bottom-middle {
            text-align: center;
            }
          
            .footer2 {
                flex-wrap: wrap;
              }
              
              .footer2-left,
              .footer2-right {
                width: 100%;
                margin-bottom: 10px;
                text-align: center;
              
              }
              
              .footer2-left {
                order: 2;
              }
              
              .footer2-right {
                order: 1;
              }
            




            
		}
	</style>
</head>
<body>


<div class="blur"></div>
    <div class="nav-bar" id="nav-bar">
        <div>
            <span class="list-one">Bilodi Charity Organisation</span>
        </div>
        <div>
        <ul>
            
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/contact">Contact</a></li>
            
        </ul>
    </div>
    <div id="button-top">
        <form method="get" action="donateRequest">
            <button class="btn btn-success" type="submit">Donate</button>
        </form>
    </div>
    
    </div>






<center>

	<div class="container">
		<h1>Sign Up</h1>
		<form action="/signup" method="post" id="form-signup">
			<input type="text" name="email" placeholder="name" required>
			<input type="password" name="password" placeholder="Password" required>
			<button type="submit" class="btn btn-success btn-lg">Sign Up</button>
		</form>
    
		<form action="/loginRequest" method="get" id="form-signup">
			<button type="submit" class="btn btn-danger btn-lg">Login</button>
		</form>

	</div>
    
</center>

  <div class="footer-page">
    <footer>
        <div class="footer-container">
          <div class="footer-left">
            <h3>Make a Donation</h3>
            <p>Your donation can help change lives. Every little bit counts.</p>
            <p>Don't forget that this website is for the BILODI ORGANISATION, a registered nonprofit organization committed to improving the lives of people in need.</p>
          </div>
          <div class="footer-right">
            <button>Donate Now</button>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <h4>About Us</h4>
            <p>BILODI ORGANISATION is a registered nonprofit organization committed to improving the lives of people in need. Learn more about our mission and work.</p>
          </div>
          <div class="footer-bottom-middle">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#">Support Us</a></li>
              <li><a href="#">Volunteer</a></li>
            </ul>
          </div>
          <div class="footer-bottom-right">
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <footer class="footer2">
        <div class="footer2-left">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Use</a>
        </div>
        <div class="footer2-right">
          <form action="join" method="get">
            <label for="email">Subscribe Now:</label>
            <input type="text" id="email" name="email" placeholder="Enter your name address">
            <button type="submit">Join</button>
          </form>
        </div>
      </footer>
    </div>



</body>
</html>
`;
var signupFail = `<!DOCTYPE html>
<html>
<head>
	<title>Sign Up</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    

    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">



	<style>
		body {
			margin: 0;
			padding: 0;
			background-color: #d3e3c4;
			font-family: Arial, sans-serif;
		}





        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');







        :root{
          --main-color: rgb(11, 10, 17);
          --text-color: rgb(255, 255, 255);
          --font: 'Nunito', sans-serif;
          --principal: rgb(247, 210, 4);
          --head:  rgb(53, 47, 47);
          --black: black;
      }
      
      *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      
      
      li a{
        font-family: var(--font);
        text-decoration: none;
        color: white;
      }
      
      html::-webkit-scrollbar{
        width: 3px;
        }
        html::-webkit-scrollbar-thumb{
        background: rgb(81, 81, 141);
        }
        html::-webkit-scrollbar-track{
        background: white;
        }
        
      
      body{
          height: 400px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .blur {
          background-image: url("/bilodiImages/charity2.jpg");
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: -1;
          background-size: cover;
          background-attachment: fixed;
          filter: blur(5px);
        }
      
        .list-one{
          color: rgb(31, 187, 31);
          font-size: medium;
          font-weight: bolder;
        }
        #nav-bar{
          color: white;
          padding: 8px;
          opacity: 85%;
          background-color: black;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        
        .nav-bar li{
          font-weight: bold;
          text-decoration: none;
          list-style:lower-greek;
        }
        .nav-bar li a:hover{
          color: rgb(11, 155, 11);
          transform: scale(.9);
          transition-duration: 0.6s;
          cursor: pointer;
          text-decoration: none;
      
        }
      
      .nav-bar ul{
          display: flex;
          justify-content: space-arround;
      }
      
      .nav-bar li{
          list-style: none;
          margin-right: 25px;
          float: right;
          text-decoration: none;
      }
      #button-top {
        display: flex;
         flex-direction: row;
      }
      #button-top form{
        margin-left: 10px;
      }
      







      .container {
        max-width: 800px;
        height: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        transform: scale(.7)
      }
  

		h1 {
			text-align: center;
			color: #2c3e50;
		}

		#form-signup {
			margin-top: 20px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}

		input[type="text"], input[type="password"] {
			width: 100%;
			padding: 10px;
			margin: 10px 0;
			border: none;
			border-radius: 5px;
			box-shadow: 0 0 5px rgba(0,0,0,0.2);
		}

		input[type="submit"] {
			background-color: #2ecc71;
			color: #fff;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			box-shadow: 0 0 5px rgba(0,0,0,0.2);
			transition: background-color 0.2s ease;
		}

		input[type="submit"]:hover {
			background-color: #27ae60;
		}
        #form-signup{
            display: flex;
            flex-direction: column;
        }
.footer-page{
    margin-top: 20px;
    background-image: url('/bilodiImages/bk.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  
  footer {
    padding: 20px;
    font-family: Arial;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-left {
    flex-basis: 70%;
  }
  
  .footer-left h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: red;
  }
  
  .footer-left p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
  }
  
  .footer-right {
    flex-basis: 30%;
    display: flex;
    justify-content: flex-end;
  }
  
  .footer-right button {
    background-color: #0072c6;
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 20px auto 0;
  }
  
  .footer-bottom-left h4,
  .footer-bottom-middle h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .footer-bottom-left p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 0;
  }
  
  .footer-bottom-middle ul,
  .footer-bottom-right ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-bottom-middle li,
  .footer-bottom-right li {
    margin-bottom: 10px;
  }
  
  .footer-bottom-middle a,
  .footer-bottom-right a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
  }
  
  
  .footer2 {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer2 a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }
  
  .footer2 a:last-of-type {
    margin-right: 0;
  }
  
  .footer2 form {
    display: flex;
    align-items: center;
  }
  
  .footer2 label {
    margin-right: 10px;
    font-size: 14px;
  }
  
  .footer2 input[type="email"] {
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
    border: none;
    margin-right: 10px;
  }
  
  .footer2 button {
    background-color: #0072c6;
    color: #fff;
    font-size: 14px;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  

		@media screen and (max-width: 800px) {

			input[type="text"], input[type="password"], input[type="submit"] {
				width: 50%; 
			}



            .footer-page{
                position: relative;
                background-image: url('/bilodiImages/bk.png');
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
              }
          
            .footer-container {
            display: block;
            color: green;
            }
            
            .footer-left {
            margin-bottom: 20px;
            }
            
            .footer-right {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            }
            
            .footer-right button {
            padding: 10px;
            }
            
            .footer-bottom {
            flex-wrap: wrap;
            }
            
            .footer-bottom-left,
            .footer-bottom-middle,
            .footer-bottom-right {
            width: 100%;
            margin-bottom: 20px;
            }
            
            .footer-bottom-middle {
            text-align: center;
            }
          
            .footer2 {
                flex-wrap: wrap;
              }
              
              .footer2-left,
              .footer2-right {
                width: 100%;
                margin-bottom: 10px;
                text-align: center;
              
              }
              
              .footer2-left {
                order: 2;
              }
              
              .footer2-right {
                order: 1;
              }
            




            
		}
	</style>
</head>
<body>


<div class="blur"></div>
    <div class="nav-bar" id="nav-bar">
        <div>
            <span class="list-one">Bilodi Charity Organisation</span>
        </div>
        <div>
        <ul>
            
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/contact">Contact</a></li>
            
        </ul>
    </div>
    <div id="button-top">
        <form method="get" action="donateRequest">
            <button class="btn btn-success" type="submit">Donate</button>
        </form>
    </div>
    
    </div>







<center>
	<div class="container">
		<h1>Sign Up</h1>
		<form action="/signup" method="post" id="form-signup">
			<input type="text" name="email" placeholder="name" required>
			<input type="password" name="password" placeholder="Password" required>
			<input type="submit" value="Sign Up">
      <br>
      <h5 style="color: red; font-weight: bold; font-family: Arial;">Account Exist</h5>
		</form>
    <form method="get" action="/loginRequest">
    <button type="submit" class="btn btn-primary btn-lg">Login</button>
    <p style="color: blue;">you already have an account</p>
    </form>
	</div>

  <center>  

    <div class="footer-page">
    <footer>
        <div class="footer-container">
          <div class="footer-left">
            <h3>Make a Donation</h3>
            <p>Your donation can help change lives. Every little bit counts.</p>
            <p>Don't forget that this website is for the BILODI ORGANISATION, a registered nonprofit organization committed to improving the lives of people in need.</p>
          </div>
          <div class="footer-right">
            <button>Donate Now</button>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <h4>About Us</h4>
            <p>BILODI ORGANISATION is a registered nonprofit organization committed to improving the lives of people in need. Learn more about our mission and work.</p>
          </div>
          <div class="footer-bottom-middle">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#">Support Us</a></li>
              <li><a href="#">Volunteer</a></li>
            </ul>
          </div>
          <div class="footer-bottom-right">
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <footer class="footer2">
        <div class="footer2-left">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Use</a>
        </div>
        <div class="footer2-right">
          <form action="join" method="get">
            <label for="email">Subscribe Now:</label>
            <input type="text" id="email" name="email" placeholder="Enter your name address">
            <button type="submit">Join</button>
          </form>
        </div>
      </footer>
    </div>



</body>
</html>
`;
        
        
        
        
 
 
    
 


module.exports = {
    signup,
    signupFail,
    pool
}