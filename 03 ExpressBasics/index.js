const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World 😃");
});

app.get("/about", (req, res) => {
  res.status(200).json({
    user: "Piyush Garg",
    age: "19",
    balance: "$2000"
  });
});

app.get("/contactus", (req, res) => {
  res.send("<h1>This is contact us page</h1>");
});

app.post("/login", (req, res) => {
  res.send("Login Success");
});

app.delete("/dltuser", (req, res) => {
  res.send("User Deleted");
});

app.get("/ab*cd", (req, res) => {
  res.send("<h1>I am regex page</h1>");
});

app.get("/user/:id/status/:status_id", (req, res) => {
  res.send(req.params);
});

app.get("/services", (req, res) => {
  res.send(`
    <ul>
    <li>Web Development </li>
    <li>c++</li>
    <li>Java</li>
    </ul>
    `);
});

app.listen(3000, () => {
  console.log("Listening to port 3000....");
});
