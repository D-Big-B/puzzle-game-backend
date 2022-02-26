const express = require("express");
const User = require("./../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  //   if (req.user)
  //     res.status(401).send({ data: "Not allowed to do required operation" });

  const leaderBoard = await User.find()
    .sort("-level")
    .sort("time")
    .sort("createdAt");

  res.status(200).json(leaderBoard);
});

module.exports = router;
