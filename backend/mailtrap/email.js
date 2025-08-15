import { transport,sender } from "./mailtrap.config.js"
import{ MailtrapTransport } from "mailtrap";
import Nodemailer from  "nodemailer";
import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
	WELCOME_EMAIL_TEMPLATE
} from "./emailTemplate.js"

export const sendVerificationEmail=async(email,verificationToken)=>{
    const recipient = email;

	try {
		const response = await transport.sendMail({
            from: sender,
            to: recipient,  // now valid
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
          });
		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

export async function sendWelcomeEmail(email, name) {
	try {
	  await transport.sendMail({
		from: sender,
		to: email,
		subject: "Welcome !!!",
		html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name),
		category: "welcome",
	  });
	  console.log("Email sent successfully");
	} catch (err) {
	  console.error("Error sending welcome email:", err);
	  throw new Error("Failed to send welcome email");
	}
  }

  export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient =  email;

	try {
		const response = await transport.sendMail({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
	const recipient =  email ;

	try {
		const response = await transport.sendMail({
			from: sender,
			to: recipient,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		});

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};

