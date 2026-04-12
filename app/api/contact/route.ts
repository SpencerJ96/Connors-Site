import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest){
	const { name, email, message } = await request.json()

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth:{
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	})

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		subject: `New enquiry from ${name}`,
		text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
	}

	try {
		await transporter.sendMail(mailOptions)
		return NextResponse.json({ success: true })
	} catch (error) {
		console.error(error)
		return NextResponse.json ({ success: false, error: 'Failed to send email'},  {status:500 })
	}
}