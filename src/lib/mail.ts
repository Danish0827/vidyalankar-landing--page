import nodemailer from "nodemailer";

type SendMailParams = {
  to: string;
  name: string;
  subject: string;
  body: string;
};

// Define the return type of the function
type SendMailResult = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function sendmail({
  to,
  name,
  subject,
  body,
}: SendMailParams): Promise<SendMailResult> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info.team.website@gmail.com",
      pass: "rupi cvcd ikfn wtki",
    },
  });

  try {
    // Verify transporter connection
    await transporter.verify();
  } catch (error) {
    return { success: false, error: "Transporter verification failed" };
  }

  try {
    // Send email
    await transporter.sendMail({
      from: '"Vidyalankar" <s.danish0827@gmail.com>',
      to,
      subject,
      html: body,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: "Email sending failed" };
  }
}
