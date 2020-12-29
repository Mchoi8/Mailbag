"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = __importStar(require("nodemailer"));
// The worker that will perform SMTP operations.
var Worker = /** @class */ (function () {
    function Worker(inServerInfo) {
        Worker.smtpInfo = inServerInfo;
    }
    /**
     * Send a message.
     */
    Worker.prototype.sendMessage = function (message) {
        return new Promise(function (res, rej) {
            var transporter = nodemailer.createTransport(Worker.smtpInfo.smtp);
            transporter.sendMail(message, function (error, info) {
                if (error) {
                    console.log(error);
                    rej(error);
                }
                else {
                    console.log('Email successfully sent: ' + info.response);
                    res();
                }
            });
        });
    };
    return Worker;
}());
exports.Worker = Worker;
//# sourceMappingURL=SMTP.js.map