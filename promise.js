const p = new Promise ((resolve,reject) =>{
    let a=3
    if(a==2){
        resolve("Success");

    }
    else{
        reject('failed');
    }
}
)

p.then(()=>{
    console.log("Successed");

}).catch(()=>{
    console.log('this is the catch');
})
