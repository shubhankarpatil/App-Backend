import express from 'express'
const router = express.Router();
// const submitData = require('../controller/submitData.controller')
import submitData from '../controller/submitData.controller.js';

router.post('/data', submitData)

export default router;