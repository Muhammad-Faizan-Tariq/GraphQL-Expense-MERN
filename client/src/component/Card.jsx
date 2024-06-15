import React from "react";
import {
  FaMoneyBill,
  FaMapMarkerAlt,
  FaDollarSign,
  FaMoneyBillAlt,
  FaUniversity,
  FaCreditCard,
} from "react-icons/fa";

const Card = ({ title, description, amount, paymentType, location }) => {
  let paymentTypeIcon;
  switch (paymentType) {
    case "Credit Card":
      paymentTypeIcon = <FaCreditCard className="inline-block mr-2" />;
      break;
    case "Bank Transfer":
      paymentTypeIcon = <FaUniversity className="inline-block mr-2" />;
      break;
    case "Cash":
      paymentTypeIcon = <FaMoneyBillAlt className="inline-block mr-2" />;
      break;
    default:
      paymentTypeIcon = null;
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="text-gray-600 mb-4">
        <FaDollarSign className="inline-block mr-2" /> {description}
      </div>
      <div className="text-gray-600 mb-4">
        <FaMoneyBill className="inline-block mr-2" /> Amount: {amount}
      </div>
      <div className="text-gray-600 mb-4">
        {paymentTypeIcon} Payment Type: {paymentType}
      </div>
      <div className="text-gray-600">
        <FaMapMarkerAlt className="inline-block mr-2" /> Location: {location}
      </div>
    </div>
  );
};

export default Card;
