// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import UserRoute from "./routes/UserRoutes.js";


// const app = express();
// mongoose.connect('mongodb+srv://adminkudara:ptbBTjqwME4ohLAB@cluster0.sfemxfy.mongodb.net/kudaradb?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', (error) => console.log(error));
// db.once('open', () => console.log('Database Connected...'));

// app.use(cors());
// app.use(express.json());
// app.use(UserRoute);

// app.use('/login', (req, res) => {
//     res.send({
//         token: 'test123'
//     });
// });

// app.listen(5000, () => console.log('Server up and running...'));