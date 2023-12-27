// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const { isUtf8 } = require('buffer');
const fs=require('fs');

async function readfile(fname){
    fs.readfile(fname,isUtf8,(err,data)=>{
        if(err){

            console.log('error ! : ${err.message}');
        }
        console.log('file is here:\n${data} ');


        // this is expensive function
        expensive();

    });
}

function  expensive(){
    for (let i=0;i<10000000000000;i++){
        console.log("hello ! ");
    }
}

const fname=process.argv[2];

if(!fname){
    console.log("no filename");
}else{
    readfile(fname);
}
