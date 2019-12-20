const mongoose = require("mongoose");
const { User } = require("./models");

mongoose.connect("mongodb://localhost/shop_app");
const db = mongoose.connection;
db.on("open", async () => {
  console.log("连接成功！");
  const user = new User({
    userName: "test2",
    password: "1232",
    nickName: "小明2",
    avatar: "/uploads/avatar.jpg"
  });
  const userSave = await user.save();
  console.log(userSave);
});

db.on("error", error => {
  console.log("连接失败：", error);
});
