const mongoose = require("mongoose");

const reqString = { type: String, required: true };

const orderSchema = new mongoose.Schema(
  {
    busDetails: {
      name: reqString,
      from: reqString,
      to: reqString,
      contactemail: reqString,
      contactphone: reqString,
      arrival: reqString,
      departure: reqString,
    },

    ticketSummary: {
      date: Date,
      ticket: reqString,
      amount: reqString,
    },
    paymentDetails: {
      orderId: reqString,
      razorpayOrderId: reqString,
      razorpayPaymentId: reqString,
    },
    userDetails: {
      name: reqString,
      age: reqString,
      gender: reqString,
      email: reqString,
      phone: reqString,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bus",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const order = mongoose.model("order", orderSchema);

module.exports = order;
