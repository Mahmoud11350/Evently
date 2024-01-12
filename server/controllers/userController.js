import connetToDb from "../db/connect";
import { handleError } from "../lib/handleError";
import User from "../models/User";

export const createUser = async (user) => {
  try {
    await connetToDb();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (id, user) => {
  try {
    await connetToDb();
    const oldUser = await User.findOne({ clerkId: id });
    if (!oldUser) {
      throw new Error("can't find needed user to update");
    }
    const updatedUser = await User.findOneAndUpdate({ clerkId: id }, user, {
      new: true,
      runValidators: true,
    });
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (clerkId) => {
  try {
    const user = await User.findOne({ clerkId });
    if (!user) {
      throw new Error("can't find needed user to delete");
    }
    const deletedUser = await User.findOneAndDelete({ clerkId });
    return JSON.parse(Json.stringify(deletedUser));
  } catch (error) {
    handleError(error);
  }
};
