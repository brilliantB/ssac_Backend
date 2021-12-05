const express = require("express");
const router = express.Router();

const fruitArr = [];  // DB 역활

// Read 전체 데이터 조회 : GET
router.get('/', (req, res)=>{
    res.json({
        dete: fruitArr,
    });
});

router.post('/',(req,res)=>{
    const{ fruit } = req.body;

    if(fruitArr.includes(fruit)){
        // 과일이 이미 존재하고 있다
        res.status(500).json({
            massage: "과일이 이미 존재 합니다.",
        });
    } else{
        // 기존 배열에 과일이 존재하지 않는다.
        fruitArr.push(fruit);
        fruitArr.sort();
        res.status(200).json({
            massage:"과일 추가가 완료 되었습니다.",
        });
    }
});


// Create 데이터 생성
// Metjod : POST
// URL : /posts
// Header : { context-type: application/json }

// Request
// Body : { fruit : 과일이름}
// 해당 과일 이름을 비구조화 할당으로 가져와서 fruitArr에 추가해주시기 바랍니다
// 그리고 추가한 후에 알파벳 순으로 정렬해주세요.
// 만약 중복된 과일이 존재 한다면, status code 500 에러 발생

// Response
// type : json
// { massage : "과일 추가가 완료 되었습니다."}

// fail
// status 500 Code
// {massage : '중복된 과일이 존재합니다.'}


module.exports = router;