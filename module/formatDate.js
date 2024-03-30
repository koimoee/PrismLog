"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBytes = exports.convertMsToDHM = void 0;
exports.default = (date) => {
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    return ([
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        date.getFullYear(),
    ].join('/') +
        ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':'));
};
const convertMsToDHM = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const result = {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
    };
    return result;
};
exports.convertMsToDHM = convertMsToDHM;
const convertBytes = (bytes) => {
    return bytes >= 1073741824 ? ~~(bytes / (1024 * 1024 * 1024)) + "GB" : bytes > 1048576 ? ~~(bytes / (1024 * 1024)) + "MB" : bytes > 1024 ? ~~(bytes / (1024)) + "KB" : bytes + "B";
};
exports.convertBytes = convertBytes;
