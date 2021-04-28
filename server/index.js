const express = require("express");
const messagesController = require("./controllers/messages_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages", messagesController.read);
app.post("/api/messages", messagesController.create);
app.put("/api/messages/:id", messagesController.update);
app.delete("/api/messages/:id", messagesController.delete);

const port = 3001;

app.listen(port, () => console.log("it's doing its thing on the port " + port));
