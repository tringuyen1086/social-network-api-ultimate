const router = require("express").Router();

// All of the API routes imported from /api/index.js
const apiRoutes = require("./api");

// Prefix of "/api" added to all of the API routes
router.use("/api", apiRoutes);

// Status 400 error message
router.use((req, res) => {
  res.status(400).send("<h1> 400 Bad Request</h1>");
});

// Status 404 error message
router.use((req, res) => {
  res.status(404).send("<h1> 404 Not Found</h1>");
});

// Status 500 error message
router.use((req, res) => {
  res.status(500).send("<h1> 500 Internal Server Error!!!</h1>");
});

module.exports = router;
