const express = require('express');
const router = express.Router();

const categoryArr = [];

// 기기 카테고리 설정
// merhod : POST
// url : /devices/categories
// body : {categoryName: 'IT', categoryDescription: 'ssac'}

// response 
// 200
// {message : '카테고리 생성 완료', data : 생성한 카테고리 객체}
// 400
// {message : '중복된 카테고리 존재'}

router.post('/', (req, res) => {
    const {categoryName, categoryDescription} = req.body;

    const categoryIdx = categoryArr.findIndex(
        (item) => item.categoryName === categoryName
    );
    
    if(categoryIdx === -1){
        categoryArr.push({
            categoryName,
            categoryDescription,
        });
        res.status(200).json({
            message : '카테고리 생성 완료',
            data: categoryArr[categoryArr.length -1],
        });
    } else{
        res.status(400).json({
            message: "중복된 카테고리 존재",
        });
    } 
});


// 기기 카테고리 조회
// url : /devices/categories

// response
// 200
// {message : '카테고리 조회 완료', data : 조회한 카테고리 배열}
// 401 (카테 고리 정보가 존재하지 않을 때_
// {message : '카테고리가 존재하지 않습니다.'}
router.get('/',(req, res) =>{
    if (categoryArr.length === 0){
        res.status(401).json({
            message: "카테고리가 존재하지 않습니다",
        });
    }else{
        res.status(200).json({
            message: "카테고리 조회 완료",
            data: categoryArr,
        });
    }
});


module.exports = router;