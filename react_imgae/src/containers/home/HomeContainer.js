import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HomeComponents from "../../components/home/HomeComponents";

function HomeContainer() {
    
    const [membership, setMembership] = useState([]);
    const baseURL = 'http://localhost:3000';

    useEffect((req, res) => {
        //전체 데이터 불러와서 membership에다가 초기화 하기
        //method : GET
        // url : /membership

        axios({
            method : "GET",
            url: `${baseURL}/membership`,
        })
        .then((response) => {
            const result = response.data.data;
            setMembership(result);
        })
        .catch((err) => {
            console.log("조회 실패");
        });

    },[]);

    return <HomeComponents membership={membership} />;
}

export default HomeContainer;
