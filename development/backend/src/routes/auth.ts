import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import config from '../config';
import { prisma } from '../utils';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = config;
const router = Router();
router.use(bodyParser.json());

const db = prisma.getPrismaClient();

const loginHandler = async (email: string, password: string, res: Response) => {
    const users = await db.users({
        where: {
            email,
            password
        }
    });
    if (users.length == 0) {
        res.status(401).send();
        return;
    }
    const userId = users[0].id;
    const token = jwt.sign(userId, JWT_SECRET);
    res.status(200).json({
        token
    });
};
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    loginHandler(email, password, res);
});

export default router;