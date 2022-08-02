import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState("");


    useEffect(() => {
        let cancel;
        axios({
            method : 'GET',
            url : 'https://openlibrary.org/search.json',
            params: {q: query, page : pageNumber},
            // cancelToken : new axios.CancelToken((c) => {
            //     cancel = c
            // }).then((res) =>{
            //     console.log(res.data);
            // }).catch((e) => {
            //     if(axios.isCancel(e)){
            //         return e;
            //     }
            // })
    }) , [query, pageNumber]);
    return(<div>Hello</div>);
}
}