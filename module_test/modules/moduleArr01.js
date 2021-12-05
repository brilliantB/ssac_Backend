// const modueArr = [1,2,apple, ssac, 5];

//문자열 중에 중복된 문자를 제거하는 함수
// ex) ssac => 'ssac'

function one(str){
    const stringArr = str.split(""); // [a,p,p,l,e]
    const uniqueArr = stringArr.filter((e, i)=>{
        return stringArr.indexOf(e) === i;
    }); //[a, p, l, e]
    return console.log(uniqueArr.join(""));
}

const modueArr = ["apple", "ssac"];

modueArr.forEach((item) => {
    one(item);
});
//number값을 받았을 경우 홀수면 '홀수 입니다'
// 짝수면 '짝수입니다' + 2의 제곱 형태
