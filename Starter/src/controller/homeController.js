const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
} = require("../services/CRUDServices");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("homepage.ejs", { listUsers: results });
};
const getSidePage = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userID = req.params.id;
  let results = await getUserById(userID);
  let userData = results?.length > 0 ? results[0] : {};
  res.render("edit.ejs", { userData: userData });
};
const getDeletePage = async (req, res) => {
  const userId = req.params.id;
  let results = await getUserById(userId);
  let userData = results.length > 0 ? results[0] : {};
  res.render("delete.ejs", { userData: userData });
};
const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  await createUser(email, name, city);
  res.redirect("/");
};
const postUpdateUser = async (req, res) => {
  const { email, name, city, userId } = req.body;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const { userId } = req.body;
  await deleteUserById(userId);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getSidePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  getDeletePage,
  postDeleteUser,
};
