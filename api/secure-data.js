const allowedIPs = ['127.0.0.1', '103.139.10.11', '119.235.218.170'];

const handler = (req, res) => {
    // Ambil query parameter
    const simulateFailure = req.query.simulateFailure === 'true';

    // Dapatkan IP client
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const formattedIP = clientIP.replace('::ffff:', '').split(',')[0].trim();

    // Simulasikan kegagalan atau validasi IP
    if (simulateFailure || !allowedIPs.includes(formattedIP)) {
        return res.status(403).json({ 
            message: 'Access forbidden: Your IP is not allowed',
            reason: simulateFailure ? 'Simulated failure' : 'IP not in allowed list',
        });
    }

    res.status(200).json({
        message: 'This is secure data accessible only from allowed IPs.',
    });
};

export default handler;
