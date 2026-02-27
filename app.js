require("dotenv").config();

const express = require ("express")
const app = express()

const mongoose = require("mongoose")
const url = process.env.MONGO_URI;

const path = require("path")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")
const session = require("express-session");
const MongoStore = require("connect-mongo").default;

const cartCount = require("./middleware/cartCount");

const adminRoutes = require("./routes/adminRoutes");
const menuRoutes = require("./routes/menuRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

main()
.then(()=>{
    console.log("mongoDB connection Established..!!")
})
.catch((err)=>{
    console.log(err)
})

async function main() {
    await mongoose.connect(url)
}

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname, "public"), {
  maxAge: "1d"
}));
app.engine('ejs', ejsMate);

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: "sessions"
  }),
  cookie: {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",   // make change in .env during deployment
    maxAge: 1000 * 60 * 60 * 8
  }
}));

app.use(cartCount);

app.use("/admin", adminRoutes);

app.use("/", menuRoutes);

app.use("/", cartRoutes);

app.use("/", orderRoutes);

// app.get("/",(req,res)=>{
//     res.send("N'Cafe")
// })

app.listen(process.env.PORT, () => {
  console.log("server running");
});

