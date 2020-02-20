import fs from 'fs';
import {
    Selector,
    tmtSelector,
    krSelector,
    hxSelector,
    irSelector,
    yxSelector,
    doSelector,
    zkSelector,
    txSelector
} from './selector.js';

const getAll = async () => {
    let data = [];
    let items = [];
    let text = '';
    items = await Selector(tmtSelector.host, tmtSelector.titleSelector, tmtSelector.urlSelector, tmtSelector.fixUrl);
    for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
    };
    items = await Selector(tmtSelector.host, tmtSelector.titleSelector, tmtSelector.urlSelector, tmtSelector.fixUrl);
    for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
    };
    items = await Selector(krSelector.host, krSelector.titleSelector, krSelector.urlSelector, krSelector.fixUrl);
    for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
    };
    items = await Selector(hxSelector.host, hxSelector.titleSelector, hxSelector.urlSelector, hxSelector.fixUrl);
    for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
    };
    items = await Selector(irSelector.host, irSelector.titleSelector, irSelector.urlSelector, irSelector.fixUrl);
    for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
    };
    items = await Selector(yxSelector.host, yxSelector.titleSelector, yxSelector.urlSelector, yxSelector.fixUrl);
    for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
    };
    items = await Selector(doSelector.host, doSelector.titleSelector, doSelector.urlSelector, doSelector.fixUrl);
    for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
    };
    items = await Selector(zkSelector.host, zkSelector.titleSelector, zkSelector.urlSelector, zkSelector.fixUrl);
    for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
    };
    items = await Selector(txSelector.host, txSelector.titleSelector, txSelector.urlSelector, txSelector.fixUrl);
    for (let i = 0; i < items.length; i++) {
        data.push(items[i]);
    };
    for (let i = 0; i < data.length; i++) {
        text += data[i].title + '\t' + data[i].url + '\n';
    };
    fs.writeFile('文件.txt', text, (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });
};

getAll();