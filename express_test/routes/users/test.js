// const express = require("express");
// const router = express.Router();

// const usersArr = [];

// // 댓글을 추가하는 라우터
// router.post('/', (req, res) => {
//     const {idx} = res.body;

// });

// // 전체 댓글을 조회하는 라우터
// router.get('/', (req, res) => {
//     res.status(200).json({
//         massage: "전체 데이터 조회 완료",
//         data: usersArr,
// });

// // 특정 댓글(idx)을 조회하는 라우터
// router.get('/:idx', (req, res) => {

//     res.status(200).json({
//         message: "특정 댓글 조회 완료",
//     });
// });


// // 특정 댓글(idx)을 삭제하는 라우터
// router.delete('/:idx', (req, res) => {
//     res.status(400).json({
//         message: "특정 댓글 삭제 완료",
//     });
// });


// // 특정 댓글(idx)을 수정하는 라우터
// router.put('/:idx', (req, res) => {
//     res.status(200).json({
//         message: "특정 댓글 수정 완료",
//     });
// });

// // 특정 댓글(idx)를 신고하는 라우터
// router.get('/:idx', (req, res) => {
//     res.status(200).json({
//         message: "특정 댓글 신고 완료",
//     });
// });



// module.exports = router;