/**
 * uploadRoutes.js
 * @description :: routes of upload/download attachment
 */

const express = require('express');
const router = express.Router();
const fileUploadController = require('../../../controller/device/v1/fileUploadController');
const auth = require('../../../middleware/auth');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.post('/device/api/v1/upload',auth(PLATFORM.DEVICE),fileUploadController.upload);

router.post('/device/api/v1/generate-pre-signed-url',auth(PLATFORM.DEVICE),fileUploadController.generatePreSignedURL);

module.exports = router;