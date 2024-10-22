import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
    name: String,
    impressions: Number,
    clicks: Number,
    conversions: Number,
    conversionRate: Number
},{timestamps: true})

export const Campaign = mongoose.model("Campaign", CampaignSchema)