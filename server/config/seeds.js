const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    username: "jdiehl2236",
    email: "jdiehl2236@gmail.com",
    password: "!2babytiger2!",
  });

  process.exit();
});
