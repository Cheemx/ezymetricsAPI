
# API Service

## Assignment Details:
This project was created as part of an assignment for the application of the Full Stack Developer (Backend Developer) role at Ezymetrics.

## Setup Instructions:
1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Set the necessary environment variables in a `.env` file (e.g., MongoDB connection URI, port).
4. Start the server with `npm start`.

## API Endpoints:

### 1. **CRM Routes:**
   - **GET `/crm/leads`**
     - Fetch dummy CRM leads from the database.
     - **Response:** Returns a list of leads.
   
### 2. **Marketing Routes:**
   - **GET `/marketing/campaigns`**
     - Fetch dummy marketing campaigns from the database.
     - **Response:** Returns a list of campaigns.

### 3. **Metrics and Reporting Routes:**
   - **GET `/marketing/process-campaigns`**
     - Fetch and calculate conversion metrics for campaigns.
     - **Response:** Saves campaign metrics including the conversion rate into DB.
   
   - **GET `/marketing/report`**
     - Generate and download a PDF report for campaign performance.
     - **Response:** Triggers the download of the generated PDF report.

### 4. **Alerting Routes:**
   - **GET `/marketing/check-campaign-leads`**
     - Send an email alert for campaigns with a conversion rate lower than 5%.
     - **Response:** Sends email alerts to campaign-related leads.
     - This route won't work because I couldn't setup any relation between leads and campaigns so couldn't figure out for receivers!
