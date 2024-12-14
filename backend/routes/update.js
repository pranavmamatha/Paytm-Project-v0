const express = require("express");
const router = express.Router();
const zod = require("zod");
const { authMiddleware } = require("../middleware");

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }
  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Update successfully",
  });
});

module.exports = router;
