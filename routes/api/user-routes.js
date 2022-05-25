const router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/user-controller');

// get all, POST            /api/users
router.route('/').get(getAllUser).post(createUser);

// get one, PUT, DELETE     /api/users/:Id
router.route('/:Id').get(getUserById).put(updateUser).delete(deleteUser);

// POST, DELETE             /api/users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;