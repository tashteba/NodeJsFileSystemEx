const http = require ('http')
const fs = require ('fs')
var path = "filetocreat.txt"
var path2 = "filetocreatedbyappended.txt"
var data = "this file was created by nodejs"
var dataEnglish='Hello'


var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
    // creat file
  /* fs.writeFile(path,data,'utf8',(err)=>{
     if (err) throw err
     console.log('the data was created')
     res.write('data was created')
     res.end()  
   })

   */

   // append file
   fs.appendFile(path2,dataEnglish,"utf8",(err)=>{
       if (err) throw err
       res.write('the file was created and data was appended')
       res.end()
   })



  
})
console.log("connected")
server.listen(1988,'127.0.0.1')
