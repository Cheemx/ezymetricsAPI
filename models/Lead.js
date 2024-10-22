import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
    name : String,
    email: String,
    phone: String,
    status: String,
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign'}
},{timestamps: true})

export const Lead = mongoose.model("Lead", LeadSchema)