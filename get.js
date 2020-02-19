const axios = require('axios');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');
const fs = require('fs');


const asyncGetNews = async function() {
    await axios.get('https://new.qq.com/ch/tech/', {responseType: 'stream'}).then(res => {
            let chunks = [];
            res.data.on('data',chunk=>{
                chunks.push(chunk);
            });
            res.data.on('end',()=>{
                let buffer = Buffer.concat(chunks);
                let html = iconv.decode(buffer,'gbk');
                doSomething(html);
            });

        });
};

// const asyncGetNews = async function() {
//     try {
//         let res = await axios.get('https://new.qq.com/ch/tech/');
//         // .then(res => {
//         //     let chunks = [];
//         //     res.data.on('data',chunk=>{
//         //         chunks.push(chunk);
//         //     });
//         //     res.data.on('end',()=>{
//         //         let buffer = Buffer.concat(chunks);
//         //         return buffer;
//         //     });
//         //     // return res.data;
//         // });
//         // let html = iconv.decode(res.data,'gbk');
//         // console.log(html);
//         doSomething(res.data);
//         // html = iconv.decode(res, 'gbk');
//         // console.log(res);
//         // 通过iconv来进行转化。
//     } catch (err) {
//         console.log(err);
//     };
// };

const doSomething = (html) => {
    let $ = cheerio.load(html);
    let item = $('.list').find('.detail');
    console.log(item.text());
}

asyncGetNews();

// let options = {
//     hostname: '',
//     path: '',
//     method: 'GET',
//     headers: {
//         'Accept': '*/*',
//         'Accept-Encoding': 'utf-8, gb18030, gb2312, gbk', //这里设置返回的编码方式 设置其他的会是乱码
//         'Accept-Language': 'zh-CN,zh;q=0.8',
//         'Connection': 'keep-alive',
//         // 'Cache-Control': 'no-cache',
//         'Host': '',
//         'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0',
//         'Upgrade-Insecure-Requests': 1,
//           'Cookie': '',
//           'Referer':  ''
//     }
// };

// let hosts = [{
//         name: "钛媒体-产业互联",
//         url: "https://www.tmtpost.com/column/3882035/"
//     },
//     {
//         name: "36氪-创新",
//         url: "https://36kr.com/information/innovate/"
//     },
//     {
//         name: "虎嗅-资讯",
//         url: "https://www.huxiu.com/article/"
//     },
//     {
//         name: "艾瑞网-互联网+",
//         url: "https://news.iresearch.cn/"
//     },
//     {
//         name: "互联网的一些事-科技前沿",
//         url: "https://www.yixieshi.com/kjqy"
//     },
//     {
//         name: "DoNews",
//         url: "https://www.donews.com/"
//     },
//     {
//         name: "Zaker-互联网新闻",
//         url: "https://www.myzaker.com/channel/5"
//     },
//     {
//         name: "腾讯-科技",
//         url: "https://new.qq.com/ch/tech/"
//     }
// ];

// for (i = 0; i < hosts.length; i++) {
//     hosts[i].options = JSON.parse(JSON.stringify(options));
//     hosts[i].options.hostname = hosts[i].url.split("/")[2];
//     hosts[i].options.path = hosts[i].url.slice(8 + hosts[i].options.hostname.length);
//     hosts[i].options.headers.Host = hosts[i].options.hostname;
//     // console.log(hosts[i].options);
// };

// https.get(hosts[6].options, res => {
//     let html = '';
//     console.log(hosts[4].options);
//     res.on('data', chunk => {
//         html += chunk;
//     });
//     res.on('end', () => {
//         doSomething(html);
//     });
// }).on('error', (e) => {
//     console.error(e.message);
// });

// const doSomething = html => {
//     console.log(html);
// };