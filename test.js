const axios = require('axios');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');
const fs = require('fs');


export function getNews(url, params) {
    return new Promise((resolve, reject) => {
     axios.get(url, {
            params: params
        }).then(res => {
            if (params.value() != 'stream') {
                resolve(res.data.result);
            } else {
                let chunks = [];
                let html = {};
                res.data.on('data',chunk=>{
                    chunks.push(chunk);
                });
                res.data.on('end',()=>{
                    let buffer = Buffer.concat(chunks);
                    // 通过iconv来进行编码转换
                    html = iconv.decode(buffer,'gbk');
            }
            return res.data.result;
        }).catch(err => {
            reject(err.data)
        })
    });
};

const asyncGetNews = async function (url) {
    let res = await axios.get(url, {
        responseType: 'stream'
    });
    let html = iconv.decode(res.data, 'gbk');
    doSomething(html);
};

const doSomething = (html) => {
    let $ = cheerio.load(html);
    let item = $('.list').find('.detail');
    console.log(item.text());
}

asyncGetNews('https://new.qq.com/ch/tech/');