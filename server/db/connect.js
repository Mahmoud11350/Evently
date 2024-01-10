import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
let cashed = global.mongoose || { conn: null, promise: null };

const connetToDb = async () => {
  if (cashed.conn) return cashed.conn;

  if (!MONGO_URI) throw new Error("MONGO_URI is missing");
  cashed.promise = cashed.promise || mongoose.connect(MONGO_URI);
  cashed.conn = await cashed.promis;
  return cashed.conn;
};

export default connetToDb;
