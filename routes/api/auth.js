const express = require("express");
const { sсhemas } = require("../../models/user");
const validateBody = require("../../middlewares/isValidateBody");
const upload = require("../../middlewares/upload");

const router = express.Router();
const ctrl = require("../../controllers/auth");
const authenticate = require("../../middlewares/authenticate");

router.post("/register", validateBody(sсhemas.registerShema), ctrl.register);
router.post("/login", validateBody(sсhemas.loginShema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
