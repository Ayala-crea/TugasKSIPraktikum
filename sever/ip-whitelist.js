const allowedIPs = ['127.0.0.1', '::1'];


const ipWhitelistMiddleware = (req, res, next) => {
    const clientIP = req.ip.replace('::ffff:', ''); // Handle IPv4-mapped IPv6
    if (allowedIPs.includes(clientIP)) {
        next();
    } else {
        res.status(403).json({ message: 'Access forbidden: Your IP is not allowed' });
    }
};

module.exports = ipWhitelistMiddleware;
