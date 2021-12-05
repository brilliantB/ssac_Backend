const con = require("../../modules/mysql");

module.export = {
    imageUpload: (req, res) => {
       const img = res.file;
       if (img){
           res.status(200).json ({
            message: "이미지 업로드 성공",
            imgUrl: img.location,
           });
       } else {
           res.status(500).json({
               message: "이미지 업로드 실패",
           });
       }
    },
    readAllData : (req, res) => {
        const sql = "select * from profile";
        con.query(sql, (err, result) => {
            if(err)
            return res.status(500).json({
                message: "서버 에러",
            });
            if (result){
                res.status(200).json({
                    message: "전체 프로필 조회",
                    data : result,
                });
            } else {
                res.status(400).json ({
                    message: "전체 프로필 조회 실패",
                });
            }
        });


    },
    createProfile: (req, res) => {  
        const { name, profileUrl} = req.body;
        const now = new Data();
        const sql = "insert into profile (name, profuleUrl, createdDate) values (?, ?, ?)";
        const params = [name, profileUrl, now];
        con.query(sql, params, (err, result) => {
            if (err)
            return res.status(500).json({
                message: "DB 서버 에러",
            });
            res.status(200).json({
                message: "프로필 저장 완료",
            });
        });
    },
};