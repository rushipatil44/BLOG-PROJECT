import express from 'express';

import { testing } from '../controller/user.controller.js';

const router = express.Router();

router.get('/test',testing)

export default router;