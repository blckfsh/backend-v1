module.exports = app => {
  const Users = require("../controllers/user.js");
  const router = require("express").Router();

  // Retrieve all Users
  router.get("/", Users.findAll);

  // Retrieve a single User with id
  router.get("/:id", Users.findOne);

  // Create a new User
  router.post("/", Users.create);

  // Update a User with id
  router.patch("/:id", Users.update);

  // Delete a User with id
  router.delete("/:id", Users.delete);

  // Delete all Users
  router.delete("/", Users.deleteAll);

  app.use('/api/users', router);
};
