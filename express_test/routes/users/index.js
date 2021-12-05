const express = require("express");
const router = express.Router();

const usersArr = [];
// 유저 이름을 받아서 조회
// method : GET
// url : /users/:name

//response
// 해당 유저가 있을 경우
// { massage : '유저를 찾았습니다.', 
//   date : {name : 'lee', age : 40, love : 'singing'}}

// 해당 유저가 없을 경우
// status 404
// { massage : '유저 정보가 없습니다.'}

router.get('/:name', (req, res) => {
    const {name} = req.params;

    const userIdx = usersArr.findIndex((item) => item.name=== name);
    
    if (userIdx === -1){
        //해당 유저가 없는 경우
        res.status(404).json({
            message: "유저 정보가 없습니다",
        });
    } else {
        // 유저가 있는 경우
        const result = usersArr[userIdx]; // 결과 값
        res.status(200).json({
            message: "유저를 찾았습니다",
            date: result,
        });
    }
});

// 유저 전체 조회
router. get ("/", (req, res)=>{
    res.status(200).json({
        massage: "전체 데이터 조회 완료",
        data: usersArr,
    });
});



// 유저 수정
// method : PUT
// url : /users/:idx
// body : { name : 유저 이름, age : 나이, love : 좋아하는 것}

// response
// 유저를 잘 찾았을 때 
// { message : '수정 완료', date : 해당 유저 데이터}

// 유저를 못 찾았을 때
// status 400
// { message : ' 유저를 찾지 못했습니다.'}


router.put("/:idx", (req, res) => {
    const {idx} = req.params;
    const {name, age, love} = req.body;

    if (usersArr[idx]){
        //유저가 있을 경우
        usersArr[idx] = {name, age, love};
        res.status(200).json({
            message: '수정 완료',
            date: usersArr[idx],
        });
    } else{
        //유저가 없을 경우
        res. status(400).json({
            message : ' 유저를 찾지 못했습니다.',
        });
    }

});

// 유저 삭제
// method : delete
// url : /users/:idx

// response
// 200
// { message : '삭제 성공', data: usersArr }

// 400
// { message :  '유저를 찾을수 없습니다' }

router.delete("/:idx", (req, res) => {
    const {idx} = req.params;

    // 0 < idx < array.length

    if(idx < 0 || idx >= usersArr.length){
        res.status(400).json({
            message :  "올바르지 않은 index 값입니다",
        });
    }

    if(usersArr[idx]){
        // 유저가 있다
        usersArr.splice(idx, 1);
        res.status(200).json({
            message : "유저를 삭제했습니다",
            data: usersArr,
        });
    } else{
        // 유저가 없다
        res.status(400).json({
            message :  "유저를 찾을수 없습니다",
        });
    }
    });


module.exports = router;