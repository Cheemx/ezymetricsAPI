import { Lead } from "../models/Lead.js"
import { Campaign } from "../models/Campaign.js"
import campaignData from "../data/campaigns.js"
import leadData from "../data/leads.js"

const calculateMetrics = (campaigns) => {
    return campaigns.map(c => ({
        ...c,
        conversionRate: (c.conversions / c.impressions) * 100
    }))
}

const saveLeadsAndCampaigns = async (req, res) => {
    try {
        await Lead.insertMany(leadData)
        await Campaign.insertMany(campaignData)
        res.send('Leads saved successfully')
    } catch (error) {
        res.status(500).send(error)
    }
}

const processCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find({})
    
        const updatedCampaigns = calculateMetrics(campaigns)
    
        for (let campaign of updatedCampaigns) {
            await Campaign.findByIdAndUpdate(campaign._id, { conversionRate: campaign.conversionRate });
        }
    
        res.status(200).send('Campaign metrics updated and saved to MongoDB')
    } catch (error) {
        res.status(500).send('Error processing campaigns: ', error.message)
    }
}

export {
    saveLeadsAndCampaigns,
    processCampaigns
}