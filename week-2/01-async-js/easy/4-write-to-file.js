// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const { isUtf8 } = require('buffer');
const fs =require('fs');

function  writeTofile(fname,content,callback){
    fs.writeFile(fname,content,isUtf8,(err)=>{
        if(err){
            console.error('errie is there');
            callback(err,null);

        }else{
            console.log("successfully written :)");
            callback(null,fname);


        }
    })
}