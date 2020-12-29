"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Note imports.
var path = require("path");
var fs = require("fs");
// Read in the server information file.
var rawInfo = fs.readFileSync(path.join(__dirname, "../serverInfo.json"));
var rawInfo1 = fs.readFileSync(path.join(__dirname, "../smtpInfo.json"));
exports.imapInfo = JSON.parse(rawInfo);
exports.smtpInfo = JSON.parse(rawInfo1);
console.log("ServerInfo: ", exports.imapInfo);
//# sourceMappingURL=ServerInfo.js.map