import nodemailer from 'nodemailer'
export default defineEventHandler(async (event) => {
  try {
    const { nodemailerConfig } = useRuntimeConfig();
    let transporter = nodemailer.createTransport(nodemailerConfig);
    const to = nodemailerConfig.auth.user;
    const body = await readBody(event);
    const username = body.username;
    const message = body.message;
    const from = body.message;
    let info = await transporter.sendMail({
      from: `"Contact Us - Nuxt.js Mailer" <${from}>`,
      to: to,
      subject: body.subject,
      text: body.message
    });
    if (!info.messageId) throw Error();
    return [`Message sent to ${body.email}`, null];
  } catch(error) {
    console.log(error);
  }
});
