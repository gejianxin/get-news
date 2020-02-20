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

let data = [];
data += Selector(tmtSelector.host, tmtSelector.titleSelector, tmtSelector.urlSelector, tmtSelector.fixUrl) +
    Selector(krSelector.host, krSelector.titleSelector, krSelector.urlSelector, krSelector.fixUrl) +
    Selector(hxSelector.host, hxSelector.titleSelector, hxSelector.urlSelector, hxSelector.fixUrl) +
    Selector(irSelector.host, irSelector.titleSelector, irSelector.urlSelector, irSelector.fixUrl) +
    Selector(yxSelector.host, yxSelector.titleSelector, yxSelector.urlSelector, yxSelector.fixUrl) +
    Selector(doSelector.host, doSelector.titleSelector, doSelector.urlSelector, doSelector.fixUrl) +
    Selector(zkSelector.host, zkSelector.titleSelector, zkSelector.urlSelector, zkSelector.fixUrl) +
    Selector(txSelector.host, txSelector.titleSelector, txSelector.urlSelector, txSelector.fixUrl);

fs.writeFile('文件.txt', data, (err) => {
    if (err) throw err;
    console.log('文件已被保存');
});