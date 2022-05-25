const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// GET all POST            /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

//GET one, PUT, DELETE     /api/thoughts/:id
router
  .route('/:Id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Post                    /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

// Delete                    /api/thoughts/:thoughtId/reactions/:reactionId
  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;