const express = require("express");
const usersControllers = require("../controllers/users.controller");
const limiter = require("../middleware/limiter");

const router = express.Router();

router
  .route('/random')
  .get(usersControllers.getRandomUser);

// router.get("/", (req, res) => {
//   res.send("users found with id");
// });

// router.post("/", (req, res) => {
//   res.send("User added");
// });

router
  .route("/all")
  /**
   * @api {get} /users All users
   * @apiDescription Get all the users
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(usersControllers.getAllUsers)

  /**
   * @api {post} /users save a User
   * @apiDescription Get all the users
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  router
  .route('/save')
  .post(usersControllers.saveAUser);

router
  .route("/:id")
  .get(limiter, usersControllers.getUserDetail)
  .patch(usersControllers.updateUser)
  .delete(usersControllers.deleteUser);

module.exports = router;
