const nodemailer = require('nodemailer')

export function getBaseURL(){
    if(typeof window === undefined) return ""
    if(process.env.VERCEL_URL) {
        return `https://${process.env.DOMAIN_URL}`
    }
    return 'http://localhost:3000'
}

const transporter = nodemailer.createTransport({
    host: "smtp.mailersend.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_ACCOUNT,
      pass: process.env.EMAIL_PASSWORD
    },
});

export const sendEmail = async(formData) => {
    const domain = getBaseURL()
    const mailOptions = {
      from: process.env.EMAIL_ACCOUNT,
      to: process.env.MY_EMAIL,
      subject: "Portfolio contact form",
      html: `
        <div style="margin: 0;padding:20px;">
            <h1 style="margin: 0; padding-left: 20px;margin-top: 20px;font-size: 28px;font-weight: bold;">${formData.subject}</h1>
            <p style="margin: 0;padding-left: 20px;margin-top: 10px;font-size: 16px;font-weight: lighter;">${formData.message}</p>
            <a href=${`mailto:`+formData.email }
                style="padding-left: 20px; text-decoration: none;padding: 15px 20px;background-color: blue;color: white;margin-top: 20px; display: inline-block;width: 40%;align-self: center;text-align: center;border-radius: 10px;"
                target="_blank"
                id="cta"
            >
                Reply
            </a>
        </div>
      `,
    }
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email: ", error);
          reject(error)
        } else {
          console.log("Email sent: ", info.response);
          resolve(info)
        }
      })
    })
}

export default async function handler(req, res) {
    if(req.method){
        try{
            const {formData} = req.body
            await sendEmail(formData)
            res.status(200).json({ success: 'Message Delivered. I will get back to you soon.' })
        }catch(error){
            console.log(error)
            res.status(500).json({ error: 'Couldn\'t send message. Try again.' })
        }
    }
  }
  