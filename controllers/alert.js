import nodemailer from "nodemailer"
import { Campaign } from "../models/Campaign.js"
import { Lead } from "../models/Lead.js"

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

const sendEmailAlert = (recipient, subject, message) => {
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: recipient,
        subject: subject,
        text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);            
        } else {
            console.log('Email sent:', info.response);            
        }
    })
}

const checkCampaignsAndAlert = async (req, res) => {
    try {
        const campaigns = await Campaign.find({conversionRate: {$lt: 5}})
        for (const campaign of campaigns) {
            // Find all leads associated with the current campaign
            const leads = await Lead.find({ campaignId: campaign._id });
            
            // Step 3: Send email to each lead
            leads.forEach(lead => {
                const message = `Hello ${lead.name},\n\nWe wanted to inform you that the campaign "${campaign.name}" that you signed up for has a low conversion rate of ${campaign.conversionRate.toFixed(2)}%. We are working to improve the performance.\n\nBest Regards,\nYour Marketing Team`;
                
                sendEmailAlert(lead.email, `Update on Campaign "${campaign.name}"`, message);
                });
            }
    
            res.status(200).send('Leads checked, alerts sent if necessary.')
    } catch (error) {
        res.status(500).send('Error checking the campaigns and sending alerts: ', error.message)
    }
}

export {checkCampaignsAndAlert}