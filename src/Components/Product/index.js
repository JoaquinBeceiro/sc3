import React, { useState } from "react";
import styled from "styled-components";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  /* width: 300px; */
  flex: 0.3;
  min-width: 300px;
  height: 370px;
  margin: 15px;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Picture = styled.img`
  height: 150px;
  width: 100%;
  object-fit: contain;
`;

const Name = styled.h4`
  margin: 10px 0 5px 0;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin: 0 0 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  font-size: 14px;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const AddButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const QuantityContainer = styled.div`
  display: flex;
  & button {
    display: flex;
    flex: 1;
  }
`;

const Price = styled.h3`
  margin: 0 0 10px 0;
  font-size: 24px;
  & span {
    font-size: 14px;
  }
`;

const QuantityNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Product = ({ sku, picture, name, description, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const item = { sku, picture, name, description, price, quantity };
    addToCart(item);
  };

  return (
    <Container>
      <DetailContainer>
        <Picture src={picture} />
        <Name>{name}</Name>
        <Description title={description}>{description}</Description>
      </DetailContainer>
      <ActionContainer>
        <QuantityContainer>
          <Button
            size="small"
            disabled={quantity <= 1}
            onClick={handleRemoveQuantity}
          >
            -
          </Button>
          <QuantityNumber>{quantity}</QuantityNumber>
          <Button size="small" onClick={handleAddQuantity}>
            +
          </Button>
        </QuantityContainer>
        <AddButtonContainer>
          <Price>
            <span>$</span>
            {Math.round(price * quantity, 1)}
          </Price>

          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddToCart}
          >
            Agregar
          </Button>
        </AddButtonContainer>
      </ActionContainer>
    </Container>
  );
};

export default Product;
