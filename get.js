import axios from 'axios';
import iconv from 'iconv-lite';
import cheerio from 'cheerio';

const hosts = [{
        name: "钛媒体-产业互联",
        url: "https://www.tmtpost.com/column/3882035/"
    },
    {
        name: "36氪-创新",
        url: "https://36kr.com/information/innovate/"
    },
    {
        name: "虎嗅-资讯",
        url: "https://www.huxiu.com/article/"
    },
    {
        name: "艾瑞网-互联网+",
        decode: "gbk",
        url: "https://news.iresearch.cn/"
    },
    {
        name: "互联网的一些事-科技前沿",
        url: "https://www.yixieshi.com/kjqy"
    },
    {
        name: "DoNews",
        url: "https://www.donews.com/"
    },
    {
        name: "Zaker-互联网新闻",
        decode: 'utf-8',
        url: "https://www.myzaker.com/channel/5"
    },
    {
        name: "腾讯-科技",
        decode: 'gbk',
        url: "https://new.qq.com/ch/tech/"
    }
];

const GetDecode = (url, decode) => {
    let chunks = [];
    let html = '';
    return new Promise((resolve, reject) => {
        axios.get(url, {
            responseType: 'stream'
        }).then(res => {
            res.data.on('data', chunk => {
                chunks.push(chunk);
            });
            res.data.on('end', () => {
                let buffer = Buffer.concat(chunks);
                html = iconv.decode(buffer, decode);
                resolve(html);
            });
        }).catch(err => {
            reject(err.message);
        });
    });
};

const GetOrigin = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data);
        });
    }).catch(err => {
        reject(err.message);
    });
};

const GetHtml = async (host) => {
    if ( ! host.decode ) {
        return GetOrigin(host.url);
    } else {
        return GetDecode(host.url, host.decode);
    }
};

export {
    GetHtml,
    hosts
};


