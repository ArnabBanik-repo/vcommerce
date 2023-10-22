const express = require('express');
const router = express.Router();

const {getUsers, getUser, addUser, deleteUser, updateUser} = require('../controllers/user')

router.route('/').post(addUser);

// Protected & Restricted
router.route('/').get(getUsers);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

module.exports = router
