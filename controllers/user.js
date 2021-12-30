const db = require("../models");
const User = db.User;

// GET: All Users
exports.findAll = (req, res) => {
  User.findAll()
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while fetching users."
      });
    });
};

// GET: User by id
exports.findOne = (req, res) => {
  const id = req.params.id;

    User.findByPk(id)
      .then(user => {
        if (user) {
          res.status(200).json({ user });
        } else {
          res.status(404).send({
            message: `Cannot find user with id = ${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error fetching user with id = ${id}`
        });
      });
};

// POST: User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Please put content." });
    return;
  }

  // Create a User
  const user = {
    fname: req.body.fname,
    lname: req.body.lname,
    address: req.body.address,
    postcode: req.body.postcode,
    contact: req.body.contact,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  // Save User in the database
  User.create(user)
    .then(user => {
      res.status(201).json({ user });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the user."
      });
    });
};

// PATCH: Update user by id
exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    const [updated] = await User.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedUser = await User.findOne({ where: { id: id } });
      return res.status(200).json({ user: updatedUser });
    }
      throw new Error('User not found');
  } catch (error) {
      return res.status(500).send({ message: "Error updating user." });
    }
};

// DELETE: User by id
exports.delete = (req, res) => {
  const id = req.params.id;

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.status(204).send({ message: "User was deleted successfully!" });
        } else {
          res.send({
            message: `Cannot delete user with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Could not delete user with id = ${id}`
        });
      });
};

// DELETE: All Users
exports.deleteAll = (req, res) => {
  User.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.status(204).send({ message: `${nums} users were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all users."
        });
      });
};
