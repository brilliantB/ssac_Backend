const promiseChain1 = (param) =>{
    return new Promise((resolve, reject)=>{
        console.log("func1");
        setTimeout(() =>{
            resolve(`func 1 success: ${param}`);
        }, 1000);
    });
};

const promiseChain2 = (param) =>{
    return new Promise((resolve, reject)=>{
        console.log("func2");
        setTimeout(() =>{
            resolve(new Error(`func 2 faild: ${param}`));
        }, 1000);
    });
};

const promiseChain3 = (param) =>{
    return new Promise((resolve, reject)=>{
        console.log("func3");
        setTimeout(() =>{
            resolve(`func 3 success: ${param}`);
        }, 1000);
    });
};

promiseChain1("start")
    .then(promiseChain2)
    .then(promiseChain3)
    .catch((error) => console.log(error));