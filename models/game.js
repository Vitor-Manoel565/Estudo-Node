import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    id: {type: String, required: true},
    value: {type: String, required: true},
});

const gamesModel = mongoose.model("games", gamesSchema);

export default gamesModel;