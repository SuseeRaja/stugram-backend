/**
 * examRoutes.js
 * @description :: CRUD API routes for exam
 */

const express = require('express');
const router = express.Router();
const examController = require('../../../controller/device/v1/examController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/device/api/v1/exam/list').post(auth(PLATFORM.DEVICE),checkRolePermission,examController.findAllExam);
router.route('/device/api/v1/exam/count').post(auth(PLATFORM.DEVICE),checkRolePermission,examController.getExamCount);
router.route('/device/api/v1/exam/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,examController.getExam);

module.exports = router;
