const express = require("express");
const User = require("./../models/User");

const router = express.Router();

router.put("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User Not Found");
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      ...user._doc,
      level: req.body.level,
      time: user._doc.time + req.body.time,
    },
    { new: true }
  );

  res.status(200).json(updatedUser);
});

module.exports = router;
