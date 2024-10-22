import mongoose from "mongoose"

const campaignData = [
        {
        "name": "Summer Promotion",
        "impressions": 15000,
        "clicks": 2500,
        "conversions": 150,
        "conversionRate": 6.0
        },
        {
        "name": "Winter Sale",
        "impressions": 20000,
        "clicks": 3200,
        "conversions": 160,
        "conversionRate": 5.0
        },
        {
        "name": "Back-to-School",
        "impressions": 12000,
        "clicks": 1800,
        "conversions": 60,
        "conversionRate": 3.33
        },
        {
        "name": "Black Friday",
        "impressions": 50000,
        "clicks": 7500,
        "conversions": 400,
        "conversionRate": 5.33
        },
        {
        "name": "Holiday Giveaway",
        "impressions": 10000,
        "clicks": 1200,
        "conversions": 80,
        "conversionRate": 6.67
        },
        {
        "name": "Cyber Monday",
        "impressions": 30000,
        "clicks": 4600,
        "conversions": 230,
        "conversionRate": 5.0
        },
        {
        "name": "Spring Special",
        "impressions": 18000,
        "clicks": 2400,
        "conversions": 120,
        "conversionRate": 5.0
        },
        {
        "name": "Autumn Deals",
        "impressions": 14000,
        "clicks": 2100,
        "conversions": 105,
        "conversionRate": 5.0
        },
        {
        "name": "New Year Countdown",
        "impressions": 22000,
        "clicks": 3200,
        "conversions": 220,
        "conversionRate": 6.88
        },
        {
        "name": "Valentine’s Day Promo",
        "impressions": 8000,
        "clicks": 1100,
        "conversions": 44,
        "conversionRate": 4.0
        },
        {
        "name": "Halloween Discount",
        "impressions": 18000,
        "clicks": 2700,
        "conversions": 135,
        "conversionRate": 5.0
        },
        {
        "name": "Easter Special",
        "impressions": 16000,
        "clicks": 2500,
        "conversions": 125,
        "conversionRate": 5.0
        },
        {
        "name": "Super Bowl Sale",
        "impressions": 25000,
        "clicks": 3700,
        "conversions": 185,
        "conversionRate": 5.0
        },
        {
        "name": "Labor Day Event",
        "impressions": 13000,
        "clicks": 1900,
        "conversions": 95,
        "conversionRate": 5.0
        },
        {
        "name": "Independence Day Offers",
        "impressions": 11000,
        "clicks": 1700,
        "conversions": 85,
        "conversionRate": 5.0
        },
        {
        "name": "End-of-Year Clearance",
        "impressions": 27000,
        "clicks": 4100,
        "conversions": 205,
        "conversionRate": 5.0
        },
        {
        "name": "Spring Break Sale",
        "impressions": 21000,
        "clicks": 3300,
        "conversions": 165,
        "conversionRate": 5.0
        },
        {
        "name": "Mother's Day Special",
        "impressions": 19000,
        "clicks": 2900,
        "conversions": 145,
        "conversionRate": 5.0
        },
        {
        "name": "Father's Day Event",
        "impressions": 17000,
        "clicks": 2500,
        "conversions": 125,
        "conversionRate": 5.0
        },
        {
        "name": "Weekend Sale",
        "impressions": 9000,
        "clicks": 1300,
        "conversions": 65,
        "conversionRate": 5.0
        }
    ]

export default campaignData