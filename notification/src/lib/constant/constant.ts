import dotenv from 'dotenv'
dotenv.config();
export const nodeMailerEmail = process.env.NODEMAILER_EMAIL 
export const nodeMailerEmailPassword = process.env.NODEMAILER_EMAIL_PASSWORD