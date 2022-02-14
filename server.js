require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const path = require("path");

const schema = require("./schema/schema");
const mongoDBUrl = process.env.MONGODB_URI || process.env.MONGODB_LOCALDB;
const PORT = process.env.PORT || process.env.PORT_LOCAL;
const app = express();

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
        app.listen(PORT, () => console.log(`Sever is listening on port ${PORT}`))
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