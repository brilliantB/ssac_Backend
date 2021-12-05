// Promise 선언
const promise1 = function(condition){
    return new Promise((resolve, reject)=>{
        if(condition){
            resolve("성공");
        }else{
            reject("실패");
        }
    });
};


// Promise 실행, 첫번째 방법
// promise1(true).then((message)=>{
//     console.log(message)
// },(error) => {
//     console.log(error);
// });

// Promise 실행, 두번째 방법 -> 더 선호
promise1(true)
    .then((message)=>{
    console.log(message)
})
.catch((error) => {
    console.log(error);
});