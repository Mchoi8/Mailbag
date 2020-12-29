// Library imports.
import Mail from "nodemailer/lib/mailer";
import * as nodemailer from "nodemailer";
import { SendMailOptions, SentMessageInfo } from "nodemailer";

// App imports.
import { SmtpServerInfo } from "./ServerInfo";

// The worker that will perform SMTP operations.
export class Worker {
  // Server information.
  private static smtpInfo: SmtpServerInfo;

  constructor(inServerInfo: SmtpServerInfo) {
    Worker.smtpInfo = inServerInfo;
  } 


  /**
   * Send a message.
   */
  public sendMessage(message: SendMailOptions): Promise<string> {

    return new Promise((res, rej) => {
      const transporter: Mail = nodemailer.createTransport(Worker.smtpInfo.smtp);

      transporter.sendMail(message,
        function(error: Error | null, info: SentMessageInfo){
          if(error) { 
            console.log(error);
            rej(error)
          } else {
            console.log('Email successfully sent: ' + info.response);
            res();
          }
        }
      );
    });

  } 


} 
