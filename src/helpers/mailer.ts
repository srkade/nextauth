import nodemailer from 'nodemailer'


export const sendEmail = async ({email,emailType,userId}:any) =>
{
    try {
       //TODO : Configure mail for usage
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, 
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          }); 

          const mailOptions = {
            from: 'one@gmail.com', 
            to: email, 
            subject: emailType ==='VERIFY' ? "verify your email": "Reset your password",
            html: "<b>Hello world?</b>", 
          }

          const mailResponse = await transporter.sendMail(mailOptions)
          return mailOptions
        
    } catch (error:any) {
        throw new Error (error.message)
    }
}