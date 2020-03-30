import React, { useState } from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartList from "./CartList";

const FabContainer = styled.div`
  position: fixed;
  right: 15px;
  bottom: 15px;
  display: relative;
`;

const ListContainer = styled.div`
  position: fixed;
  right: 15px;
  bottom: 85px;
  padding: 5px;
  background-color: #eee;
  max-height: 90vh;
  transition: visibility 0s, opacity 0.5s linear;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
`;

const Cart = ({ items, removeFromCart }) => {
  const [showList, setShowList] = useState(false);

  const handleCartClick = () => {
    setShowList(!showList);
  };
  return (
    <FabContainer>
      <ListContainer show={showList}>
        <CartList items={items} removeFromCart={removeFromCart} />
      </ListContainer>
      <Fab color="primary" aria-label="add" onClick={handleCartClick}>
        <ShoppingCartIcon  />
      </Fab>
    </FabContainer>
  );
};

export default Cart;
