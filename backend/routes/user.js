const express = require('express');
const router = express.Router();

const {getUsers, getUser, register, deleteUser, updatePassword, login, logout, protect, getMe, deleteMe, restrictTo, updateMe, forgotPassword, verifyUser } = require('../controllers/user');
const { createFavourite, removeFavourite, getFavourites } = require('../controllers/favourite');
const { validateMail } = require("../controllers/user");

router.route('/verifyUser/:token').get(verifyUser)
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgotPassword').post(forgotPassword)

// User Related
router.use(protect)

router.route('/me').get(getMe, getUser);
router.route('/logout').get(logout);
router.route('/updateMe').patch(updateMe);

router.use(validateMail);
router.route('/favourites').get(getFavourites);
router.route('/updatePassword').patch(updatePassword);
router.route('/deleteMe').delete(deleteMe, deleteUser);
router.route('/favourite/:id').get(createFavourite);
router.route('/unfavourite/:id').get(removeFavourite);
router.route('/:id').get(getUser);

// Restricted
router.use(restrictTo('admin'));
router.route('/').get(getUsers);
router.route('/:id').delete(deleteUser);

module.exports = router
