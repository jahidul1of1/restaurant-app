import React, { useEffect, useState } from "react";
import MainSection from "../MainSection";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getorders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  const [orderCart, setOrderCart] = useState();
  const handleOrderCart = (aorder) => {
    const jCart = JSON.parse(aorder);
    setOrderCart(jCart);
  };
  console.log(orderCart);
  return (
    <div>
      <MainSection>
        
      </MainSection>
    </div>
  );
};

export default Orders;
