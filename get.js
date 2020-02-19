const axios = require('axios');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');
const fs = require('fs');


const asyncGetNews = async function(url) {
    let html = '';
    await axios.get(url, {responseType: 'stream'}).then(res => {
            let chunks = [];
            let html = {};
            res.data.on('data',chunk=>{
                chunks.push(chunk);
            });
            res.data.on('end',()=>{
                let buffer = Buffer.concat(chunks);
                // 通过iconv来进行编码转换
                html = iconv.decode(buffer,'gbk');
            });
         getOnce(html);
        });
};

const getOnce = (html) => {
    let $ = cheerio.load(html);
    let item = $('.detail').children('h3').find('a');
    let title = [];
    item.each(( index, element ) => {
        title[index] = $(element).text();
        console.log(title[index].trim());
    });
};

//https://pacaio.match.qq.com/irs/rcd?cid=146&token=49cbb2154853ef1a74ff4e53723372ce&ext=tech&page=
// const getMore = (url) => {
//     for (i = 2; i < 10; i++) {
        
//     }
// };

asyncGetNews('https://new.qq.com/ch/tech/');

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