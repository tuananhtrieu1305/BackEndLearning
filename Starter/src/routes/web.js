const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getSidePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  getDeletePage,
  postDeleteUser,
} = require("../controller/homeController");

router.get("/", getHomePage);
router.get("/sidePage", getSidePage);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.get("/delete/:id", getDeletePage);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user", postDeleteUser);

module.exports = router;
