import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
    useEffect(() => {
        let cancel;
        axios({
            method : 'GET',
            url : 'https://openlibrary.org/search.json',
            params: {q: query, page : pageNumber},
            cancelToken : new axios.CancelToken((c) => {
                cancel = c
            }).then((res) =>{
                console.log(res.data);
            }).catch((e) => {
                if (axios.isCancel(e)) return
            })
            // Here we are chaining the then() then we need to catch the error
            // You are inside a JavaScript object so stop using semiclons in order to avoid getting these errors again
    }, [query, pageNumber]);
    }
    return("Hello");
}