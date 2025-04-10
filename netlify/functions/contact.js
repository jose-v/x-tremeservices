const nodemailer = require('nodemailer');

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // Log environment variables (without exposing sensitive data)
    console.log('Environment check:', {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS,
      hasEmailTo: !!process.env.EMAIL_TO
    });

    const { name, email, phone, service, message } = JSON.parse(event.body);
    
    // Log parsed data (for debugging)
    console.log('Received form data:', {
      name,
      email,
      phone,
      service,
      messageLength: message?.length
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Service Request from ${name}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    try {
      // Send email
      console.log('Attempting to send notification email...');
      await transporter.sendMail(mailOptions);
      console.log('Notification email sent successfully');

      // Send confirmation email to the customer
      console.log('Attempting to send confirmation email...');
      const confirmationMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting X-Treme Services',
        html: `
          <h2>Thank you for contacting X-Treme Services!</h2>
          <p>Dear ${name},</p>
          <p>We have received your service request and will get back to you shortly.</p>
          <p>Here's a summary of your request:</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <br>
          <p>Best regards,</p>
          <p>X-Treme Services Team</p>
        `
      };

      await transporter.sendMail(confirmationMailOptions);
      console.log('Confirmation email sent successfully');
    } catch (emailError) {
      console.error('Error in email sending:', emailError);
      throw emailError;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    };
  } catch (error) {
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Error submitting form',
        error: error.message 
      })
    };
  }
}; 