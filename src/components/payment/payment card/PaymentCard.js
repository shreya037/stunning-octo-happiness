import React from 'react';
import './PaymentCard.css';

const PaymentCard = ({ method, image, onPaymentMethodChange, selectedPaymentMethod }) => {

  const handleRadioChange = () => {
    onPaymentMethodChange(method);
  };

  return (
    <label className="paymentCard-section">
      <div className="paymentCard-body">
        <div className="paymentCard-body-left">
          <div className="box">
            <img src={image} alt="product image" />
          </div>
          <div className="box">
            <span>{method}</span>
          </div>
        </div>
        <div className="paymentCard-body-right">
          <div className="box">
            <input
              type="radio"
              name={`paymentMethod-${method}`}
              value={method}
              checked={selectedPaymentMethod === method}
              onChange={handleRadioChange}
            />
          </div>
        </div>
      </div>
    </label>
  );
}

export default PaymentCard;
