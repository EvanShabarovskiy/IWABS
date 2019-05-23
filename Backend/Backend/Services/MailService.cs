using Backend.Models;
using Backend.Models.UIModels;
using Microsoft.AspNetCore.Http;
using System;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class MailService
    {
        private IWABS_Context database;
        private SmtpClient smtpClient;

        private readonly string credentialEmail = "e.project.rv@gmail.com";
        private readonly string credentialPass = "vrfvwzemrducyhiq";

        public MailService(IWABS_Context database, SmtpClient smtpClient)
        {
            this.database = database;
            this.smtpClient = smtpClient;
        
            this.smtpClient.Host = "smtp.gmail.com";
            this.smtpClient.Port = 587;
            this.smtpClient.EnableSsl = true;
            this.smtpClient.Credentials = new NetworkCredential(credentialEmail, credentialPass);
        }

        public void SendMail(FeedbackUI feedback)
        {
            MailMessage mailMessage = new MailMessage(new MailAddress(credentialEmail, feedback.Name), new MailAddress(credentialEmail))
            {
                Subject = feedback.Subject,
                Body = feedback.Email + ": " + feedback.Message
            };

            smtpClient.Send(mailMessage);
        }
    }
}
