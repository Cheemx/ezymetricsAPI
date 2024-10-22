import express from "express"
import {
    saveLeadsAndCampaigns, 
    processCampaigns
} from "./controllers/metrics.js"
import { checkCampaignsAndAlert } from "./controllers/alert.js"
import { generateAndDownloadReport } from "./controllers/reports.js"
import leadData from "./data/leads.js"
import campaignData from "./data/campaigns.js"

const router = express()

router.use(express.json({
    limit:"16kb"
}))

router.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

// Routes

// Route to get the dummy Lead data
router.get('/crm/leads', (req, res) => res.json(leadData))

// Route to get the dummy Campaign data 
router.get('/marketing/campaigns', (req, res) => res.json(campaignData))

// Route to save the dummy CRM data into DB
router.get('/crm/savedata', saveLeadsAndCampaigns)

// Route to fetch campaigns, calculate metrics and save them
router.get('/marketing/process-campaigns', processCampaigns)

// Route to generate and download a PDF report
router.get('/marketing/report', generateAndDownloadReport)

// Route to check campaigns and trigger alerts
router.get('/marketing/check-campaign-leads', checkCampaignsAndAlert)

export {router}