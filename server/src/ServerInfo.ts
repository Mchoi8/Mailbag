//Note imports.
const path = require("path");
const fs = require("fs");



// Define interface for server information.

export interface SmtpServerInfo{
  smtp : {
    host: string,
    port: number,
    auth: {
      user: string,
      pass: string
    }
  }
}

export interface ImapServerInfo {

  imap : {
    host: string,
    port: number,
    auth: {
      user: string,
      pass: string
    }
  }
}

// The configured server info.
export let imapInfo: ImapServerInfo;
export let smtpInfo: SmtpServerInfo;

// Read in the server information file.
const rawInfo: string = fs.readFileSync(path.join(__dirname, "../serverInfo.json"));

const rawInfo1: string = fs.readFileSync(path.join(__dirname, "../smtpInfo.json"));

imapInfo = JSON.parse(rawInfo);
smtpInfo = JSON.parse(rawInfo1);

console.log("ServerInfo: ", imapInfo);
