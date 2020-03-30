import React, { useState } from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const ItemInfoContainer = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  margin: 5px 10px 0 0;
`;

const ItemInfo = styled.span`
  display: flex;
  padding: 2px 10px;
  margin: 2px 0;
  border-left: 1px solid #eee;
`;

const TotalContainer = styled.div`
  font-size: 20px;
  font-weight: bolder;
  text-align: right;
`;

const CartList = ({ items, removeFromCart }) => {
  const handleRemoveAction = index => {
    removeFromCart(index);
  };

  const totalPrice =
    items.length > 0
      ? items
          .map(({ price, quantity }) => price * quantity)
          .reduce((total, totalItem) => {
            return total + totalItem;
          })
      : 0;


  if (items.length === 0) return <p>Carrito vacío</p>;

  return (
    <List>
      {items &&
        items.map(({ picture, name, description, price, quantity }, index) => (
          <div key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={picture} />
              </ListItemAvatar>
              <ListItemText
                primary={name}
                secondary={
                  <ItemInfoContainer>
                    <ItemInfo>
                      Precio: <span>${price}</span>
                    </ItemInfo>
                    <ItemInfo>
                      Cantidad: <span>{quantity}</span>
                    </ItemInfo>
                    <ItemInfo>
                      <strong>
                        Total: <span>${Math.round(price * quantity, 1)}</span>
                      </strong>
                    </ItemInfo>
                  </ItemInfoContainer>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleRemoveAction(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<TotalContainer>Total: ${totalPrice}</TotalContainer>}
        />
      </ListItem>
    </List>
  );
};

export default CartList;
