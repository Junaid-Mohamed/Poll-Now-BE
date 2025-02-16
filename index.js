const express = require("express");
const dotenv = require("dotenv");
const { initializeDB } = require("./db");
const cors = require("cors")
const { createPoll, getPolls, vote } = require("./controllers/pollingController");

dotenv.config();

const app = express();

const PORT = 8080 || process.env.PORT

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["","http://localhost:5173"]}));

initializeDB();

app.post('/api/create', createPoll);
app.get('/api/polls', getPolls);
app.post('/api/vote', vote)

app.listen(PORT,()=>console.log(`app listening on port ${PORT}`))