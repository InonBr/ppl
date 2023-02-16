import mongoose from "mongoose";

const UserDateDataModel = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
  enterTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
  },
  totalTimeSum: {
    type: Number,
  },
  totalTimeSumNoBreaks: {
    type: Number,
  },
  breaksTime: {
    type: Number,
  },
  normalTime: {
    type: Number,
    default: 8.6,
  },
  extraTime: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  dayDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});

export default mongoose.model(
  "UserDateDataModel",
  UserDateDataModel,
  "dates_data"
);
