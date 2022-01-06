const http = require ('http')
const fs = require ('fs')
var pathappend = "filetocreatedbyappended.txt"
var data = "this file was created by nodejs"
var dataEnglish='Hello'
var dataFrech = 'salut'


var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
    fs.appendFile(pathappend,'hello in french :'+ dataFrech,(err)=>{
        if (err){
            console.log(err.message)
        }
        else {
            console.log('saved')
        }
        
    })
    


  
})
console.log("connected")
server.listen(1988,'127.0.0.1')
