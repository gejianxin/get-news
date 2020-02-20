import cheerio from 'cheerio';
import {
    GetHtml,
    hosts
} from './get.js';

const Selector = async (host, titleSelector, urlSelector, fixUrl) => {
    let html = await GetHtml(host).then(res => {
        return res;
    });
    let $ = cheerio.load(html);
    let title = titleSelector($);
    let url = urlSelector($);
    let titles = [];
    let urls = [];
    let items = [];
    title.each((index, element) => {
        titles[index] = $(element).text();
        titles[index] = titles[index].trim();
    });
    url.each((index, element) => {
        urls[index] = $(element).attr('href');
    });
    for (let i = 0; i < titles.length; i++) {
        if (typeof fixUrl === "function") {
            items.push({
                title: titles[i],
                url: fixUrl(urls[i])
            });
        } else {
            items.push({
                title: titles[i],
                url: urls[i]
            });
        };
    };
    return items;
};

const tmtSelector = {
    host: hosts[0],
    titleSelector: function ($) {
        return $('.cont').children('h3');
    },
    urlSelector: function ($) {
        return $('.cont').find('.title');
    },
    fixUrl: function (url) {
        return url = "https://www.tmtpost.com" + url;
    }
};

const krSelector = {
    host: hosts[1],
    titleSelector: function ($) {
        return $('.title-wrapper, .ellipsis-2').children('a');
    },
    urlSelector: function ($) {
        return $('.title-wrapper, .ellipsis-2').children('a');
    },
    fixUrl: function (url) {
        return url = "https://36kr.com" + url;
    }
};

const hxSelector = {
    host: hosts[2],
    titleSelector: function ($) {
        return $('.article-item__content__title');
    },
    urlSelector: function ($) {
        return $('.article-item').children('a');
    },
    fixUrl: function (url) {
        return url = "https://www.huxiu.com" + url;
    }
};

const irSelector = {
    host: hosts[3],
    titleSelector: function ($) {
        return $('.txt').children('h3').find('a');
    },
    urlSelector: function ($) {
        return $('.txt').children('h3').find('a');
    }
};

const yxSelector = {
    host: hosts[4],
    titleSelector: function ($) {
        return $('.col-md-8').children('h2');
    },
    urlSelector: function ($) {
        return $('.col-md-8').children('h2').find('a');
    }
};

const doSelector = {
    host: hosts[5],
    titleSelector: function ($) {
        return $('h3').find('a');
    },
    urlSelector: function ($) {
        return $('h3').find('a');
    }
};

const zkSelector = {
    host: hosts[6],
    titleSelector: function ($) {
        return $('.article-content').find('.article-title');
    },
    urlSelector: function ($) {
        return $('.article-wrap').children('a');
    },
    fixUrl: function (url) {
        return url = "https://" + url.slice(2);
    }
};

const txSelector = {
    host: hosts[7],
    titleSelector: function ($) {
        return $('.detail').children('h3').find('a');
    },
    urlSelector: function ($) {
        return $('.detail').children('h3').find('a');
    }
};

export {
    Selector,
    tmtSelector,
    krSelector,
    hxSelector,
    irSelector,
    yxSelector,
    doSelector,
    zkSelector,
    txSelector
}