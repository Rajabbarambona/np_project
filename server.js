require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
//For cross origin
const cors = require("cors");
const path = require("path");
//For the entire authentication library
//const passport = require("passport");
//using passport as a strategy
//const passportLocal = require("passport-local").Strategy;
// to parse all the cookies we are going to use
//const cookieParser = require("cookie-parser");
//bycrypt for hashing the pswd
//const bcrypt = require("bcryptjs");
//ExpressSession
//const session = require("express-session");
//Importing the body parser to parse the request and response objects
//const bodyParser = "body-parser";

const schema = require("./schema/schema");
const mongoDBUrl = process.env.MONGODB_URI || process.env.MONGODB_LOCALDB;
const PORT = process.env.PORT || process.env.PORT_LOCAL;
const app = express();

//Middleware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

{
    /*app.use(
    cors({
        origin: "http://localhost:3000", //location of the react app where we cxonnecting to
        credentials: true,
    })
);
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveuninitilized: true,
    })
);
app.use(cookieParser("secretcode"));

//ROUTES
app.post("/signup", (req, res) => {
    console.log(req.body);
});

app.post("/signin", (req, res) => {
    console.log(req.body);
});
app.get("/user", (req, res) => {});*/
}

//Allow cross-origin request
app.use(cors());

// data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//To allow and start GraphQL Server
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

// Check if the application is in production Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, ".", "client", "build")));

    // If no API routes are hit, send the React app
    app.get("*", (req, res) =>
        res.sendFile(path.join(__dirname, ".", "client", "build", "index.html"))
    );
}

// To test if we are connected to the database
// mongoose.connection.once('open', () => {
//     console.log('Connected to database');
// })
mongoose
    .connect(mongoDBUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
    )
    .catch((err) => console.error(err));

// //Import Routes
// //const postsRoutes = require("./routes/posts/");

// //adding a middleware
// //app.use("/posts", postsRoute);

// //Middlewares: when hitting a route then we can run a certain function as displayed in this route(/posts)
// app.use("/posts", () => {
//     console.log("Raj this is a middleware");
// });

// //Routes, furthermore, we can use app.delete to delete a post/app.patch for updating/app.get to get info/app.posts to get posts
// app.get("/", (req, res) => {
//     res.send("Hey We are on home");
// });
// app.get("/posts", (req, res) => {
//     res.send("Guys, We are on posts");
// });

// //Connect to the DataBase
// mongoose.connect(
//   "",

//   () => console.log("Connected to DB")
// );

// //Listening to the server via port 3000
// app.listen(6000);