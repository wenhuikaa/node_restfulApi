const express = require("express"); //引入express
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const passport=require("passport");
const app = express();  //创建app实例

//引入users.js
const users=require("./routes/api/users");
//引入profile.js
const profile=require("./routes/api/profile");
//引入post.js
const posts=require("./routes/api/posts");

//DB config
const db = require("./config/keys").mongoURI;

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Connect to mongodb
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//passport初始化
app.use(passport.initialize());

//引入passport,并将passport传递到passport.js，就不需要在这里写了
require("./config/passport")(passport);


//使用routes
app.use("/api/users",users);
app.use("/api/profile",profile);
app.use("/api/posts",posts);

//设置路由
// app.get('/', (req, res) => {
//   res.send("hello world");
// })

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})