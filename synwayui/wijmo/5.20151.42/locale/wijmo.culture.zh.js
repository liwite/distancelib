/*
    *
    * Wijmo Library 5.20151.42
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    * 
    * Licensed under the Wijmo Commercial License. 
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
/*
* Wijmo culture file: zh (Chinese)
*/
var wijmo;
(function (wijmo) {
    wijmo.culture = {
        Globalize: {
            numberFormat: {
                '.': '.',
                ',': ',',
                percent: { pattern: ['-n%', 'n%'] },
                currency: { decimals: 2, symbol: '¥', pattern: ['$-n', '$n'] }
            },
            calendar: {
                '/': '/',
                ':': ':',
                firstDay: 0,
                days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                daysAbbr: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                monthsAbbr: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                am: ['上午', '上'],
                pm: ['下午', '下'],
                eras: ['公元'],
                patterns: {
                    d: 'yyyy/M/d', D: 'yyyy"年"M"月"d"日"',
                    f: 'yyyy"年"M"月"d"日" H:mm', F: 'yyyy"年"M"月"d"日" H:mm:ss',
                    t: 'H:mm', T: 'H:mm:ss',
                    m: 'M"月"d"日"', M: 'M"月"d"日"',
                    y: 'yyyy"年"M"月"', Y: 'yyyy"年"M"月"',
                    g: 'yyyy/M/d H:mm', G: 'yyyy/M/d H:mm:ss',
                    s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss'
                }
            }
        },
        FlexGrid: {
            groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} 项)'
        },
        FlexGridFilter: {
            header: '显示行',
            and: '与',
            or: '或',
            apply: '应用',
            clear: '清除',
            stringOperators: [
                { name: '（空白）', op: null },
                { name: '等于', op: 0 },
                { name: '不等于', op: 1 },
                { name: '开始是', op: 6 },
                { name: '结尾是', op: 7 },
                { name: '包含', op: 8 },
                { name: '不包含', op: 9 }
            ],
            numberOperators: [
                { name: '（空白）', op: null },
                { name: '等于', op: 0 },
                { name: '不等于', op: 1 },
                { name: '大于', op: 2 },
                { name: '大于或等于', op: 3 },
                { name: '小于', op: 4 },
                { name: '小于或等于', op: 5 }
            ],
            dateOperators: [
                { name: '（空白）', op: null },
                { name: '等于', op: 0 },
                { name: '是前', op: 4 },
                { name: '是后', op: 3 }
            ],
            booleanOperators: [
                { name: '（空白）', op: null },
                { name: '等于', op: 0 },
                { name: '不等于', op: 1 }
            ]
        }
    };
})(wijmo || (wijmo = {}));
;
//# sourceMappingURL=wijmo.culture.zh.js.map

