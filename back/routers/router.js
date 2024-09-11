const express = require("express");
const {
  singUp,
  test,
  loginUser,
  settingsUser,
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/Controllers");
const router = express.Router();

router.get("/", test);
router.post("/singup", singUp);
router.post("/login", loginUser);
router.get("/settings", settingsUser);
router.post("/createtask", createTask);
router.get("/gettasks", getTasks);
router.put("/updatetask/:id", updateTask);
router.delete("/delete/:id", deleteTask);
module.exports = router;
