import nodemailer from 'nodemailer'
export default defineEventHandler(async (event) => {
  try {
    const { nodemailerConfig } = useRuntimeConfig();
    let transporter = nodemailer.createTransport(nodemailerConfig);
    const body = await readBody(event);
    let info = await transporter.sendMail({
      from: `"Contact Us - Nuxt.js Mailer" ${body.username} <${body.email}>`,
      to: nodemailerConfig.auth.user,
      subject: body.subject,
      text: body.message
    });
    if (!info.messageId) throw Error();
    
    return `Message sent to ${body.email}`;
  } catch(error) {
    console.log(error);
  }
});
