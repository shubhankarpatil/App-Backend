import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    First_Name: { type: String },
    Last_Name: { type: String },
    Address: { type: String },
    Mobile_Number: { type: Number },
    OrderedAt: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
    strict: false,
    timezone: "Asia/Kolkata",
  }
);

orderSchema.index({ First_Name: 1, Last_Name: 1 });
orderSchema.index({ First_Name: 1, Address: 1 });
orderSchema.index({ First_Name: 1, Mobile_Number: 1 });
orderSchema.index({ First_Name: 1 });

const Order = mongoose.model("orders", orderSchema);

export default Order;
