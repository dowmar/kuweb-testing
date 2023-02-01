import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoutes.js";

const PORT = process.env.port || 5000;
require('dotenv').config();

const app = express();
mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(PORT, () => console.log('Server up and running...'));