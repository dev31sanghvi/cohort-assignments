/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new promise((resolve,reject)=>{
        if(n<0){
            reject("this case is not possible");
        }
        else{
            setTimeout(()=>{
                resolve('good to go after ${n} seconds');
            }),seconds*1000;
        }

    });

}

module.exports = wait;



