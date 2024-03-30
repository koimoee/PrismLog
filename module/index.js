"use strict";
// module/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchHandler = exports.error = exports.warn = exports.log = exports.success = void 0;
const chalk_1 = __importDefault(require("chalk"));
const formatDate_1 = __importDefault(require("./formatDate"));
const clear_1 = __importDefault(require("clear"));
let logCount = 0;
let MAX_LOG_COUNT = 100;
const customLog = (message, showDate = true) => {
    logCount++;
    const formattedDate = showDate ? `[ ${(0, formatDate_1.default)(new Date())} ] ` : '';
    console.log(`${formattedDate}${message}`);
    if (logCount >= MAX_LOG_COUNT) {
        clearConsole();
        logCount = 0;
    }
};
const clearConsole = () => {
    (0, clear_1.default)();
    console.log(chalk_1.default.yellow("Console log cleared."));
};
const success = ({ name, description, showDate = true }) => {
    let tolog = chalk_1.default.green('[ Success ] ');
    const formattedName = name ? `[ ${chalk_1.default.green(name)} ] ` : '';
    tolog += `${formattedName}${description}`;
    customLog(tolog, showDate);
};
exports.success = success;
const log = ({ name, description, showDate = true }) => {
    let tolog = chalk_1.default.blueBright('[ Log ] ');
    const formattedName = name ? `[ ${chalk_1.default.blueBright(name)} ] ` : '';
    tolog += `${formattedName}${description}`;
    customLog(tolog, showDate);
};
exports.log = log;
const warn = ({ name, description, showDate = true }) => {
    let tolog = chalk_1.default.yellow('[ Warn ] ');
    const formattedName = name ? `[ ${chalk_1.default.yellow(name)} ] ` : '';
    tolog += `${formattedName}${description}`;
    customLog(tolog, showDate);
};
exports.warn = warn;
const error = ({ name, description, showDate = true }) => {
    let tolog = chalk_1.default.red('[ Error ] ');
    const formattedName = name ? `[ ${chalk_1.default.red(name)} ] ` : '';
    tolog += `${formattedName}${description}`;
    customLog(tolog, showDate);
};
exports.error = error;
const catchHandler = (who) => {
    return (data) => {
        (0, exports.error)({ name: who, description: data.toString() });
    };
};
exports.catchHandler = catchHandler;
exports.default = { success: exports.success, log: exports.log, warn: exports.warn, error: exports.error, catchHandler: exports.catchHandler, clearConsole };
