const { SECURATE_CODE } = require("../config");
const { hashdPassword } = require("../helpers/auth");
const { UserModel, TasksModel } = require("../models/Models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const test = (req, res) => {
  res.send("Hello");
};
const singUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    if (!regex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }

    const exist = await UserModel.findOne({ email });
    if (exist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hash = await hashdPassword(password);
    const user = await UserModel.create({ name, email, password: hash });

    if (!user) {
      return res.status(400).json({ error: "Error creating user" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters and required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const matchToken = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      SECURATE_CODE,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) {
          throw err;
        }
        return res.cookie("token", token, { httpOnly: true }).json(user);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const settingsUser = (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, SECURATE_CODE, {}, (err, user) => {
      if (err) {
        return res.status(403).json({ error: "Token is not valid" });
      }
      return res.json(user);
    });
  } else {
    res.status(401).json({ error: "Token not found" });
  }
};

const createTask = async (req, res) => {
  const { title, body } = req.body;
  try {
    if (!title) {
      return res.status(400).json({ error: "Fill the title input please" });
    }
    if (!body) {
      return res.status(400).json({ error: "Fill the body input please" });
    }

    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ error: "No token provided, authorization denied" });
    }

    jwt.verify(token, SECURATE_CODE, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Token is not valid" });
      }

      try {
        const user = await UserModel.findById(decoded.id);
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }

        const task = await TasksModel.create({ title, body, userId: user._id });
        return res.status(200).json({ task });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getTasks = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(404).json("Token is not found");
    }
    console.log(token);
    jwt.verify(token, SECURATE_CODE, {}, async (err, user) => {
      if (err) {
        return res.status(400).json({ error: "Token is not valid" });
      }
      try {
        const findeTasksById = await TasksModel.find({ userId: user.id });
        return res.status(200).json({ findeTasksById });
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTask = async (req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;

  try {
    if (!title) {
      return res.status(400).json({ error: "Fill the title input, please" });
    }
    if (!body) {
      return res.status(400).json({ error: "Fill the body input, please" });
    }

    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ error: "No token provided, authorization denied" });
    }

    jwt.verify(token, SECURATE_CODE, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Token is not valid" });
      }
      try {
        const user = await UserModel.findById(decoded.id);
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }

        const task = await TasksModel.findOne({
          _id: id,
          userId: user._id,
        });
        if (!task) {
          return res.status(404).json({
            error: "Task not found or does not belong to you",
            kastId: _id,
          });
        }

        task.title = title;
        task.body = body;
        await task.save();

        return res.status(200).json({ task });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(400)
      .json({ error: "No token provided, authorization denied" });
  }
  jwt.verify(token, SECURATE_CODE, {}, async (err, decoded) => {
    if (err) {
      res.status(403).json({ error: "Token is not valid" });
    }
    try {
      const task = await TasksModel.findById(id);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }

      if (!decoded.id === task.userId.toString()) {
        return res
          .status(403)
          .json({ error: "No autherized to delete this task" });
      }
      TasksModel.findByIdAndDelete(id);
      return res.status(200).json({ success: "Task successfully deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
  const task = await TasksModel.findById(id);
  if (!task) {
    return res.status(404).json({ error: "Not found task" });
  }
  return TasksModel.findByIdAndDelete(task.id);
};
module.exports = {
  singUp,
  test,
  loginUser,
  settingsUser,
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
