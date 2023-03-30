const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');


function join(){

fs.readFile('pagesMain/home.html','utf-8',function(err,data){
    if(err){
        console.error(err);
    }else{
        
const $ = cheerio.load(data);
let join = $('#joinReq');
let join2 = $('#join');
let logout = $('#logout');

join.css('display', 'none');
join2.css('display', 'none');
logout.css('display','block');

 fs.writeFile(`pagesMain/home.html`,$.html(),function(err){
if(err){
    console.log('file no writing err')
}
console.log('writed succesfull modify css of button login to appear');
res.sendFile(path.join(__dirname,'pagesMain','home.html'));

 });
}});
}
function homePage(req,res){


    fs.readFile('pagesMain/home.html','utf-8',function(err,data){
        if(err){
            console.error(err);
        }else{
            
    const $ = cheerio.load(data);
    let headnameUser = $('#nameUser');
    let userWords = $('#userword');
    headnameUser.text(`Welcome ${req.session.user.username}`);
    userWords.text(`Because of your presence many are help and hope`);
    
    let join = $('#joinReq');
    let join2 = $('#join');
    
    join.css('display', 'none');
    join2.css('display', 'none');
     fs.writeFile(`pagesMain/home.html`,$.html(),function(err){
    if(err){
        console.log('file no writing err')
    }
    console.log('writed succesfull');
    res.sendFile(path.join(__dirname,'pagesMain','home.html'));

     });
    }});




}







module.exports = {
    join,
    homePage
}