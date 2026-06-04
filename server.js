import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, phone } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Email to company
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'maisonimmaa@gmail.com',
      subject: `Nouveau message de ${name} - ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Auto-reply to user
    const replyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Merci pour votre message - IMMAA',
      html: `
        <h2>Merci pour votre message</h2>
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre message et nous vous répondrons dans les 24 heures.</p>
        <p>Cordialement,<br>L'équipe IMMAA</p>
      `
    }

    await transporter.sendMail(replyOptions)

    res.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ error: 'Failed to send email', details: error.message })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
