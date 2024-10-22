import PDFDocument from "pdfkit"
import fs from "fs"
import { Campaign } from "../models/Campaign.js"

const generatePDFReport = (data, filename, callback) => {
    const doc = new PDFDocument()

    const stream = fs.createWriteStream(filename)
    doc.pipe(stream)

    doc.fontSize(20).text('Campaign Performance Report', {align: 'center'})

    data.forEach((item, index) => {
        doc.fontSize(12).text(`\nCampaign ${index+1}:`)
        doc.text(`Name: ${item.name}`)
        doc.text(`Impressions: ${item.impressions}`)
        doc.text(`Clicks: ${item.clicks}`)
        doc.text(`Conversions: ${item.conversions}`)
        doc.text(`Conversion Rate: ${item.conversionRate.toFixed(2)}%\n`)
    });

    doc.end()
    stream.on('finish', callback)
}

const generateAndDownloadReport = async (req, res) => {
    try {
        const campaigns = await Campaign.find({})
        const fileName = 'campaign_report.pdf'
        generatePDFReport(campaigns, fileName, () => {
            res.download(fileName, (err) => {
                if (err) {
                    console.error("Error downloading report:", err);
                    res.status(500).send("error downloading report")
                } else {
                    console.log("Report downloaded successfully.");  
                    fs.unlink(fileName, (err) => {
                        if (err) {
                            console.error("Error deleting file:", err)
                        } else {
                            console.log("File deleted successfully from server")                            
                        }
                    })
                }
            })
        })
    } catch (error) {
        console.error("Error generating report:", error.message)
        res.status(500).send('Error generating report:', error.message)
    }
}

export {generateAndDownloadReport}