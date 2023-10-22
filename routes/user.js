const express = require('express');
const router = express.Router();

const {getUsers, getUser, register, deleteUser, updateUser, updatePassword, login, protect, getMe, deleteMe} = require('../controllers/user')

router.route('/register').post(register);
router.route('/login').post(login);

// User Related
router.use(protect)

router.route('/me').get(getMe, getUser);
router.route('/updateMe').patch(updateUser);
router.route('/updatePassword').patch(updatePassword);
router.route('/deleteMe').delete(deleteMe, deleteUser);
router.route('/:id').get(getUser);

// Restricted
router.route('/').get(getUsers);
router.route('/:id').delete(deleteUser);

module.exports = router
