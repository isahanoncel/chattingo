const express = require('express');
const dotenv = require("dotenv");
const chats = require("./data/chats")
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const formidable = require('express-formidable');
const {notFound,errorHandler} = require("./middlewares/errorMiddleware");


dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();
const app = express();
app.use(formidable());

app.use("/api/user",userRoutes);
app.use(notFound);
app.use(errorHandler);


app.get("/api/chat",(req,res) => {
    res.send(chats);
})
app.get("/api/chat/:id",(req,res) => {
    const singleChat = chats.find(elem => elem._id === req.params.id);
    res.send(singleChat ?? 404);
})

app.listen(PORT ?? 3000,console.log(`server started on port ${PORT}`));