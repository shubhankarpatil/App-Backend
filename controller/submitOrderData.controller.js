import Order from "../models/orders.model.js";

const submitOrderData = async (req, res) => {
  try {
    console.log("Inside the order data submit page", req.body);
    const data = req.body;
    const dbresp = await Order.insertMany([data], { ordered: false });
    if (dbresp.length > 0) {
      res.status(200).json({ message: "Data inserted successfully" });
    } else {
      res.status(500).json({ message: "Data insertion failed" });
    }
  } catch (error) {
    console.log("Inside catch block of submitOrderData", error);
    res.status(500).json({ message: "Data insertion failed" });
  }
};

export default submitOrderData;
