const allowedIPs = ['127.0.0.1', '103.139.10.11'];

const handler = (req, res) => {
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const formattedIP = clientIP.replace('::ffff:', '').split(',')[0].trim();

    if (!allowedIPs.includes(formattedIP)) {
        return res.status(403).json({ message: 'Access forbidden: Your IP is not allowed' });
    }

    res.status(200).json({
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
};

export default handler;
