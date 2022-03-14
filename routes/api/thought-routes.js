const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughts-controller");

// <GET>, <POST>: /api/thoughts
router.route("/").get(getAllThoughts).post(createThoughts);

// <GET>, <PUSH>, <DELETE>:/api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// <POST>: /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

// <DELETE>: /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
