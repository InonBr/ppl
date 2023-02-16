import mongoose from "mongoose";

const UsersDataModel = new mongoose.Schema({
  companyId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
  workingStatus: { type: Boolean, default: false },
});

export default mongoose.model("UsersDataModel", UsersDataModel, "users");
