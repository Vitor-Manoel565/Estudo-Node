import mongoose from "mongoose";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

mongoose.connect(process.env.CONNECT_URL);

let db = mongoose.connection;

export default db;