const mongoose = require("mongoose");

const pollingSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [
        {
            option: String,
            votes: { type: Number, default: 0}
        }
    ]
})

module.exports = mongoose.model("Poll",pollingSchema);