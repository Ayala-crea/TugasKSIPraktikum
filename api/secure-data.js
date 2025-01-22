const allowedIPs = ['127.0.0.1', '103.139.10.11', '119.235.218.170'];

const strideThreats = [
    'Spoofing identity',
    'Tampering with data',
    'Repudiation',
    'Information disclosure',
    'Denial of service',
    'Elevation of privilege'
];

const dreadParameters = {
    DamagePotential: 'High',
    Reproducibility: 'Moderate',
    Exploitability: 'Low',
    AffectedUsers: 'Low',
    Discoverability: 'High'
};

const handler = (req, res) => {
    const inputIP = req.query.ip;

    if (!inputIP) {
        return res.status(400).json({ message: 'No IP address provided.' });
    }

    const formattedIP = inputIP.replace('::ffff:', '').trim();

    if (!allowedIPs.includes(formattedIP)) {
        return res.status(403).json({ 
            message: 'Access forbidden: The provided IP is not allowed.', 
            providedIP: formattedIP,
            strideThreats,
            dreadAssessment: dreadParameters
        });
    }

    res.status(200).json({
        message: 'Access granted: The provided IP is allowed.',
        providedIP: formattedIP,
        strideThreats: 'No threats detected.',
        dreadAssessment: 'No risks detected.'
    });
};

export default handler;
