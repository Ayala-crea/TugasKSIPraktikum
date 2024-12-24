const express = require('express');
const path = require('path');
const cors = require('cors');
const ipWhitelistMiddleware = require('./ip-whitelist');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
    origin: 'http://127.0.0.1:5501' // Izinkan hanya dari Live Server
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', ipWhitelistMiddleware); // Apply IP whitelist to API routes

// API Endpoints
app.get('/api/secure-data', (req, res) => {
    res.json({
        message: 'This is secure data accessible only from allowed IPs.',
        riskAssessment: {
            STRIDE: {
                Spoofing: 'Not possible due to IP restrictions.',
                Tampering: 'Mitigated by server-side validations.',
                Repudiation: 'Logged requests ensure traceability.',
                InformationDisclosure: 'Access limited by IP.',
                DenialOfService: 'Reduced by rejecting unknown IPs.',
                ElevationOfPrivilege: 'Restricted by secure API design.',
            },
            DREAD: {
                DamagePotential: 1,
                Reproducibility: 2,
                Exploitability: 1,
                AffectedUsers: 1,
                Discoverability: 1,
                OverallRisk: 'Low',
            },
        },
    });
});

// Serve frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
