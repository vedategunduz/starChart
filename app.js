'use strict';
// {s} parametres => inc, dec, dec to inc, inc to dec, double dec, double inc, double dec to dobule inc
let setChart = function (e = 10, s = 'dec') {
    let text = '',
        decText = '',
        incText = '';
    switch (s) {
        case 'inc':
            // HTML output is as follows
            // *
            // **
            // ***
            // ****
            // *****
            // ... {e pieces}
            for (let r = 1; r <= e; r++) {
                for (let e = 1; e <= r; e++) text += '*';
                r < e && (text += '<br>');
            }
            break;
        case 'dec':
            // HTML output is as follows
            // ... {e pieces}
            // *****
            // ****
            // ***
            // **
            // *
            for (let r = e; r >= 0; r--) {
                for (let e = 1; e <= r; e++) text += '*';
                r > 1 && (text += '<br>');
            }
            break;
        case 'dec to inc':
            // HTML output is as follows
            // ... {e pieces}
            // *****
            // ****
            // ***
            // **
            // *
            // **
            // ***
            // ****
            // *****
            // ... {e pieces}
            for (let r = e; r >= 0; r--) {
                for (let e = 1; e <= r; e++) decText += '*';
                r > 0 && (decText += '<br>');
            }
            for (let r = 2; r <= e; r++) {
                for (let e = 1; e <= r; e++) incText += '*';
                r < e && (incText += '<br>');
            }
            text = decText + incText;
            break;
        case 'inc to dec':
            // HTML output is as follows
            // *
            // **
            // ***
            // ****
            // *****
            // ... {e pieces}
            // *****
            // ****
            // ***
            // **
            // *
            for (let r = 1; r <= e; r++) {
                for (let e = 1; e <= r; e++) incText += '*';
                r < e + 1 && (incText += '<br>');
            }
            for (let r = e - 1; r >= 0; r--) {
                for (let e = 1; e <= r; e++) decText += '*';
                r > 1 && (decText += '<br>');
            }
            text = incText + decText;
            break;
        case 'double dec':
            // HTML output is as follows
            // ... {e pieces}
            // ***** *****
            // ****   ****
            // ***     ***
            // **       **
            // *         *
            // I use zeros instead of spaces since space size is not equal to star size.
            let t = e;
            for (let r = 1; r <= e; r++) {
                for (let c = t; c >= 1; c--) decText += '*';
                for (let c = 1; c <= r; c++) decText += '0';
                for (let c = 1; c <= r - 1; c++) decText += '0';
                for (let c = t; c >= 1; c--) decText += '*';
                r < e && (decText += '<br>');
                t--;
            }
            text = decText;
            break;
        case 'double inc':
            // HTML output is as follows
            // *         *
            // **       **
            // ***     ***
            // ****   ****
            // ***** *****
            // ... {e pieces}
            break;
        case 'double dec to double inc':
            // HTML output is as follows
            // ... {e pieces}
            // ***** *****
            // ****   ****
            // ***     ***
            // **       **
            // *         *
            // **       **
            // ***     ***
            // ****   ****
            // ***** *****
            // ... {e pieces}
            break;
        default:
            // NULL
    }
    console.log(text), (document.getElementsByTagName('body')[0].innerHTML = text);
}();