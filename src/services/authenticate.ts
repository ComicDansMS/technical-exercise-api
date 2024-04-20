import { Request, Response, NextFunction } from "express";

export default function authenticate(req: Request, res: Response, next: NextFunction) {
    const userApiKey = req.header('x-api-key');

    if (!userApiKey) {
        return res.status(401).json({ message: 'API key is required' });
    }

    const isValidKey = process.env.API_KEYS.includes(userApiKey);

    if (!isValidKey) {
        return res.status(403).json({ message: 'Invalid API key' });
    }

    next();
}
