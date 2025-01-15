const allowedIPs = ['127.0.0.1', '103.139.10.11', '119.235.218.170'];

const handler = (req, res) => {
    const inputIP = req.query.ip;

    if (!inputIP) {
        return res.status(400).json({ message: 'No IP address provided.' });
    }

    const formattedIP = inputIP.replace('::ffff:', '').trim();

    if (!allowedIPs.includes(formattedIP)) {
        return res.status(403).json({ 
            message: 'Access forbidden: The provided IP is not allowed.', 
            providedIP: formattedIP 
        });
    }

    res.status(200).json({
        message: 'Access granted: The provided IP is allowed.',
        providedIP: formattedIP
    });
};

export default handler;
