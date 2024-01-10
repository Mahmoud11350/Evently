const { Schema, models, model } = require("mongoose");

const userSchema = new Schema({});

export default models?.User || model("User", userSchema);
