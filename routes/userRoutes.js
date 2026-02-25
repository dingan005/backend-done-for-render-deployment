const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

router.get("/dashboard", protect, (req, res) => {
  res.json({
    message: "Dashboard API Access Granted ✅",
    userId: req.user.id,
  });
});

module.exports = router;



// /userRoutes.js → protected dashboard/profile routes